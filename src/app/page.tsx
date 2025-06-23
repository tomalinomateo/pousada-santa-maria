"use client";

import PousadaSection from "@/components/home/PousadaSection";
import QuartosSection from "@/components/home/QuartosSection";
import ExperienciasSection from "@/components/home/ExperienciasSection";
import ReservarSection from "@/components/home/ReservarSection";
import HeroVideo from "@/components/HeroVideo";

const BG_LIGHT = "var(--main-bg, #FAF7F2)"; // beige suave

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ background: BG_LIGHT }}>
      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{ height: "81vh", minHeight: 500 }}
      >
        <HeroVideo />
      </section>

      <PousadaSection />
      <QuartosSection />
      <ReservarSection />
      <ExperienciasSection />
    </main>
  );
}
