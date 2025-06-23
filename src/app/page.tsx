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
        className="relative w-full h-screen md:h-[81vh] -mt-16 md:mt-0"
        style={{ minHeight: "100vh", margin: 0, padding: 0 }}
      >
        <HeroVideo />
      </section>

      <PousadaSection />
      <QuartosSection />
      <ExperienciasSection />
      <ReservarSection />
    </main>
  );
}
