"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaUsers } from "react-icons/fa";
import type { Quarto } from "@/data/quartos";
import { getQuartoImages } from "@/data/quartos";
import ReservarButton from "@/components/ReservarButton";

type RoomModalProps = {
  quarto: Quarto | null;
  onClose: () => void;
};

export default function RoomModal({ quarto, onClose }: RoomModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!quarto) return;
    setVisible(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quarto]);

  if (!quarto) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const images = getQuartoImages(quarto);

  const modalContent = (
    <div
      className={`fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${quarto.nome}`}
    >
      <div
        className={`absolute inset-[2.5%] overflow-y-auto transition-transform duration-500 ease-out ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        }`}
        style={{ background: "var(--card-bg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="fixed top-4 right-4 z-[210] flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-lg transition-all duration-500 ease-out hover:scale-105"
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
            <p className="text-base mt-1 flex items-center gap-2" style={{ color: "var(--text)" }}>
              <FaUsers className="shrink-0" />
              Até {quarto.capacidade} pessoas
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] rounded-none overflow-hidden bg-white/50"
              >
                <Image
                  src={src}
                  alt={`${quarto.nome} - foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
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
