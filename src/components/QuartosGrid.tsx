"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaUsers, FaArrowRight } from "react-icons/fa";
import type { Quarto } from "@/data/quartos";
import ImagemGaleria from "@/components/ImagemGaleria";
import RoomModal from "@/components/RoomModal";

// Las tarjetas de la grilla entran escalonadas, de a pares por fila.
const REVEAL_STAGGER = ["", "reveal-d1", "reveal-d2", "reveal-d3"];

type QuartosGridProps = {
  quartos: Quarto[];
};

export default function QuartosGrid({ quartos }: QuartosGridProps) {
  const searchParams = useSearchParams();
  const [selectedQuarto, setSelectedQuarto] = useState<Quarto | null>(null);

  useEffect(() => {
    const slug = searchParams.get("quarto");
    if (slug) {
      const quarto = quartos.find((q) => q.slug === slug);
      if (quarto) setSelectedQuarto(quarto);
    }
  }, [searchParams, quartos]);

  return (
    <>
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        data-reveal="group"
        // Esta grilla vive dentro de un <Suspense>: SiteMotion puede marcarla
        // como revelada antes de que React la hidrate.
        suppressHydrationWarning
      >
        {quartos.map((quarto, i) => (
          <button
            type="button"
            key={quarto.id}
            onClick={() => setSelectedQuarto(quarto)}
            className={`card-motion reveal-child group text-left rounded-none overflow-hidden shadow-lg ${
              REVEAL_STAGGER[i % REVEAL_STAGGER.length]
            }`}
            style={{ background: "var(--navbar-bg, rgba(255,255,255,0.97))" }}
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              {quarto.capa && (
                /* Grilla de 2 columnas dentro de max-w-6xl: ~560px por columna */
                <ImagemGaleria
                  imagem={quarto.capa}
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 560px"
                  className="card-zoom"
                />
              )}
            </div>
            <div className="p-4 md:p-5">
              {quarto.capacidade !== undefined && (
                <div className="inline-flex items-center gap-2 mb-2">
                  <FaUsers
                    className="text-xs md:text-sm opacity-80"
                    style={{ color: "var(--accent)" }}
                  />
                  <span
                    className="text-xs md:text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--text)" }}
                  >
                    Até {quarto.capacidade} pessoas
                  </span>
                </div>
              )}
              <h2
                className="text-lg md:text-xl font-bold uppercase mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                {quarto.nome}
              </h2>
              <span
                className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-sm group-hover:gap-3 transition-all duration-300 ease-out"
                style={{ color: "var(--accent)" }}
              >
                Ver fotos
                <FaArrowRight className="text-xs" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <RoomModal
        quarto={selectedQuarto}
        onClose={() => {
          setSelectedQuarto(null);
          window.history.replaceState(null, "", "/quartos");
        }}
      />
    </>
  );
}
