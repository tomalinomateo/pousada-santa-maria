"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaUsers, FaArrowRight } from "react-icons/fa";
import type { Quarto } from "@/data/quartos";
import { getQuartoBySlug } from "@/data/quartos";
import RoomModal from "@/components/RoomModal";

type QuartosGridProps = {
  quartos: Quarto[];
};

export default function QuartosGrid({ quartos }: QuartosGridProps) {
  const searchParams = useSearchParams();
  const [selectedQuarto, setSelectedQuarto] = useState<Quarto | null>(null);

  useEffect(() => {
    const slug = searchParams.get("quarto");
    if (slug) {
      const quarto = getQuartoBySlug(slug);
      if (quarto) setSelectedQuarto(quarto);
    }
  }, [searchParams]);

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {quartos.map((quarto) => (
          <button
            type="button"
            key={quarto.id}
            onClick={() => setSelectedQuarto(quarto)}
            className="group text-left rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.01]"
            style={{ background: "var(--navbar-bg, rgba(255,255,255,0.97))" }}
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={quarto.imagem}
                alt={quarto.nome}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 md:p-5">
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
              <h2
                className="text-lg md:text-xl font-bold uppercase mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                {quarto.nome}
              </h2>
              <span
                className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-sm group-hover:gap-3 transition-all duration-500 ease-out"
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
