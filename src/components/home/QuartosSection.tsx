"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { quartos } from "@/data/quartos";

const GOLD = "var(--accent, #D6B24C)";

const BG_GRAY = "var(--section-bg, #F3F4F6)";

function useScrollArrows(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = () => {
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
  };

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
  }, []);

  return { showLeft, showRight };
}

export default function QuartosSection() {
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
          className="text-2xl md:text-4xl text-center mb-6 md:mb-10 tracking-widest uppercase font-bold"
          style={{ color: GOLD }}
        >
          Quartos
        </h2>
      </div>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-transform duration-500 ease-out hover:scale-105"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-6 w-6" style={{ color: GOLD }} />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 md:gap-8 py-4 scrollbar-hide px-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {quartos.map((quarto) => (
            <Link
              key={quarto.id}
              href={`/quartos?quarto=${quarto.slug}`}
              className="flex-shrink-0 w-72 md:w-80 bg-white shadow-lg border border-[rgba(0,0,0,0.04)] flex flex-col transition-transform duration-500 ease-out hover:scale-[1.02]"
            >
              <div className="relative h-48 md:h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={quarto.imagem}
                  alt={`Foto do quarto ${quarto.nome}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl md:text-2xl mb-2 uppercase"
                    style={{ color: GOLD }}
                  >
                    {quarto.nome}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-black/5 text-black/70 font-semibold text-xs px-3 py-1 rounded-full">
                    <FaUsers />
                    <span>{quarto.capacidade} pessoas</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-transform duration-500 ease-out hover:scale-105"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-6 w-6" style={{ color: GOLD }} />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mt-8 md:mt-12">
          <Link href="/quartos">
            <button
              style={{
                background: GOLD,
                color: "var(--button-text, #222)",
              }}
              className="w-full md:w-auto px-8 py-3 font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ease-out uppercase flex items-center justify-center gap-2 text-lg"
            >
              <span className="md:hidden">Nossos quartos</span>
              <span className="hidden md:inline">Ver todos os quartos</span>
              <FaArrowRight className="ml-1 text-base" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
