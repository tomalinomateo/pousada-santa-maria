"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import type { QuartoResumo } from "@/data/quartos";
import ImagemGaleria from "@/components/ImagemGaleria";

const GOLD = "var(--accent, #D6B24C)";

const BG_GRAY = "var(--section-bg, #F3F4F6)";

// Las tarjetas del carrusel entran una detrás de la otra, no todas juntas.
const REVEAL_STAGGER = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4"];

function useScrollArrows(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const hasOverflow = el.scrollWidth > el.clientWidth;
    if (!hasOverflow) {
      setShowLeft(false);
      setShowRight(false);
      return;
    }
    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
    setShowLeft(hasOverflow && !atStart);
    setShowRight(hasOverflow && !atEnd);
  }, [containerRef]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateArrows();
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    el.addEventListener("scroll", updateArrows);
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", updateArrows);
    };
  }, [containerRef, updateArrows]);

  return { showLeft, showRight };
}

type QuartosSectionProps = {
  quartos: QuartoResumo[];
};

export default function QuartosSection({ quartos }: QuartosSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { showLeft, showRight } = useScrollArrows(scrollContainerRef);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320; // Scroll amount in pixels
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-8 md:py-14"
      style={{
        color: "var(--text, #222)",
        background: BG_GRAY,
        marginBottom: 32,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          className="text-2xl md:text-4xl text-center mb-3 md:mb-4 tracking-widest uppercase font-bold"
          style={{ color: GOLD }}
          data-reveal="up"
        >
          Quartos
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <p
            className="text-lg reveal-d1"
            style={{ color: "var(--text, #444)" }}
            data-reveal="up"
          >
            Quartos com o conforto certo e a natureza por perto.
          </p>
        </div>
      </div>

      {/* Grupo: las tarjetas salen del viewport en horizontal, así que el
          disparador es el contenedor y el escalonado va en los hijos. */}
      <div className="relative" data-reveal="group">
        {/* Las flechas se funden en vez de aparecer y desaparecer de golpe.
            Quedan siempre montadas para que la transición tenga de dónde salir. */}
        <button
          onClick={() => handleScroll("left")}
          className="carousel-arrow absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white"
          aria-label="Scroll left"
          data-visible={showLeft}
          tabIndex={showLeft ? 0 : -1}
          aria-hidden={!showLeft}
        >
          <FaChevronLeft className="h-6 w-6" style={{ color: GOLD }} />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 md:gap-8 py-4 scrollbar-hide px-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {quartos.map((quarto, i) => (
            <Link
              key={quarto.id}
              href={`/quartos?quarto=${quarto.slug}`}
              className={`card-motion reveal-child flex-shrink-0 w-72 md:w-80 bg-white shadow-lg border border-[rgba(0,0,0,0.04)] flex flex-col ${
                REVEAL_STAGGER[i % REVEAL_STAGGER.length]
              }`}
            >
              <div className="relative h-48 md:h-56 bg-gray-100 overflow-hidden">
                {quarto.capa && (
                  <ImagemGaleria
                    imagem={quarto.capa}
                    sizes="(max-width: 768px) 288px, 320px"
                    className="card-zoom"
                  />
                )}
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl md:text-2xl mb-2 uppercase"
                    style={{ color: GOLD }}
                  >
                    {quarto.nome}
                  </h3>
                  {quarto.capacidade !== undefined && (
                    <div className="inline-flex items-center gap-2 bg-black/5 text-black/70 font-semibold text-xs px-3 py-1 rounded-full">
                      <FaUsers />
                      <span>{quarto.capacidade} pessoas</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={() => handleScroll("right")}
          className="carousel-arrow absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white"
          aria-label="Scroll right"
          data-visible={showRight}
          tabIndex={showRight ? 0 : -1}
          aria-hidden={!showRight}
        >
          <FaChevronRight className="h-6 w-6" style={{ color: GOLD }} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mt-8 md:mt-12" data-reveal="up">
          <Link href="/quartos">
            <button
              style={{
                background: GOLD,
                color: "var(--button-text, #222)",
              }}
              className="btn-motion w-full md:w-auto px-8 py-3 font-semibold shadow-lg uppercase flex items-center justify-center gap-2 text-lg"
            >
              <span className="md:hidden">Nossos quartos</span>
              <span className="hidden md:inline">Ver todos os quartos</span>
              <FaArrowRight className="btn-arrow ml-1 text-base" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
