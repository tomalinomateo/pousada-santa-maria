"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaUsers } from "react-icons/fa";
import type { Quarto } from "@/data/quartos";
import ImagemGaleria from "@/components/ImagemGaleria";
import ReservarButton from "@/components/ReservarButton";

type RoomModalProps = {
  quarto: Quarto | null;
  onClose: () => void;
};

// Tiene que coincidir con la duración de la transición de salida, si no el
// modal se desmonta antes de terminar de irse.
const EXIT_MS = 320;

export default function RoomModal({ quarto, onClose }: RoomModalProps) {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = useCallback(() => {
    setVisible(false);
    if (exitTimer.current) clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  // El efecto sólo debe correr al abrir o cerrar, no cada vez que el padre
  // vuelve a renderizar y cambia la identidad de onClose.
  const closeRef = useRef(handleClose);
  closeRef.current = handleClose;

  useEffect(() => {
    if (!quarto) return;

    // Dos cuadros de espera: el primero pinta el estado cerrado, el segundo
    // dispara la transición. Sin esto el navegador ve un único cambio y el
    // modal aparece de golpe.
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setVisible(true))
    );

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      // Devolvemos el foco a la tarjeta que abrió el modal.
      previouslyFocused.current?.focus();
    };
  }, [quarto]);

  useEffect(
    () => () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
    },
    []
  );

  if (!quarto) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${EXIT_MS}ms var(--ease-soft)`,
      }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${quarto.nome}`}
    >
      <div
        className="absolute inset-[2.5%] overflow-y-auto"
        style={{
          background: "var(--card-bg)",
          opacity: visible ? 1 : 0,
          scale: visible ? "1" : "0.96",
          translate: visible ? "none" : "0 12px",
          transition: `opacity ${EXIT_MS}ms var(--ease-soft), scale ${EXIT_MS}ms var(--ease-soft), translate ${EXIT_MS}ms var(--ease-soft)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="btn-motion fixed top-4 right-4 z-[210] flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-lg"
          style={{
            background: "var(--page-bg)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
          }}
          aria-label="Fechar"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="p-6 md:p-8 pt-6 md:pt-8">
          <header className="mb-6">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase pr-10"
              style={{ color: "var(--accent)" }}
            >
              {quarto.nome}
            </h2>
            {quarto.capacidade !== undefined && (
              <p className="text-base mt-1 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <FaUsers className="shrink-0" />
                Até {quarto.capacidade} pessoas
              </p>
            )}
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {quarto.imagens.map((imagem, i) => (
              <div
                key={imagem.id}
                className="relative aspect-[4/3] rounded-none overflow-hidden bg-white/50"
              >
                {/* Modal a 95vw, grilla de 2 columnas: ~46vw por columna */}
                <ImagemGaleria
                  imagem={imagem}
                  sizes="(max-width: 640px) 95vw, 46vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <ReservarButton roomName={quarto.nome} className="w-full sm:w-auto">
              Reservar este quarto
            </ReservarButton>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
}
