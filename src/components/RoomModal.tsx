"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
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

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${quarto.nome}`}
    >
      <div
        className={`relative w-full max-w-5xl h-[90vh] overflow-y-auto rounded-xl shadow-2xl transition-transform duration-500 ease-out ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        }`}
        style={{ background: "var(--card-bg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/40 text-white transition-all duration-500 ease-out"
          aria-label="Fechar"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="p-6 md:p-8">
          <header className="mb-6">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase pr-10"
              style={{ color: "var(--accent)" }}
            >
              {quarto.nome}
            </h2>
            <p className="text-base mt-1" style={{ color: "var(--text)" }}>
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
}
