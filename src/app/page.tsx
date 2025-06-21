"use client";

import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";
import {
  FaArrowRight,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useRef } from "react";
import PousadaSection from "@/components/home/PousadaSection";
import QuartosSection from "@/components/home/QuartosSection";
import ExperienciasSection from "@/components/home/ExperienciasSection";

const GOLD = "var(--accent, #D6B24C)";
const GRAY = "var(--text, #444444)";
const BG_LIGHT = "var(--main-bg, #FAF7F2)"; // beige suave
const BG_GRAY = "var(--section-bg, #F3F4F6)"; // gris muy claro

const quartos = [
  { id: 1, nome: "Mar", capacidade: 3, imagem: "/images/quartos/mar.jpg" },
  {
    id: 2,
    nome: "Flamboyant",
    capacidade: 3,
    imagem: "/images/quartos/flamboyant.jpg",
  },
  {
    id: 3,
    nome: "Cajueiro",
    capacidade: 3,
    imagem: "/images/quartos/cajueiro.jpg",
  },
  {
    id: 4,
    nome: "Buriti",
    capacidade: 2,
    imagem: "/images/quartos/buriti.jpg",
  },
  {
    id: 5,
    nome: "Carnaúba",
    capacidade: 4,
    imagem: "/images/quartos/carnauba.jpg",
  },
  {
    id: 6,
    nome: "Plâncton",
    capacidade: 4,
    imagem: "/images/quartos/plancton.jpg",
  },
  {
    id: 7,
    nome: "MARESIA",
    capacidade: 2,
    imagem: "/images/quartos/maresia.jpg",
  },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <main className="min-h-screen bg-white" style={{ background: BG_LIGHT }}>
      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{ height: "81vh", minHeight: 500 }}
      >
        <HeroVideo videoId="LfMxM_IQPXc" />
      </section>

      <PousadaSection />
      <QuartosSection />
      <ExperienciasSection />
    </main>
  );
}
