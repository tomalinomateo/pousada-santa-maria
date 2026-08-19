import PousadaSection from "@/components/home/PousadaSection";
import QuartosSection from "@/components/home/QuartosSection";
import ExperienciasSection from "@/components/home/ExperienciasSection";
import ReservarSection from "@/components/home/ReservarSection";
import HeroVideo from "@/components/HeroVideo";
import { quartosResumo } from "@/data/quartos";
import { FaChevronDown } from "react-icons/fa";

const BG_LIGHT = "var(--main-bg, #FAF7F2)"; // beige suave

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ background: BG_LIGHT }}>
      {/* Hero Section */}
      <section
        className="hero-viewport relative w-full overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <HeroVideo />

        {/* Sin texto encima, el video se muestra limpio. El degradado queda sólo
            donde hace falta: arriba para que se lean el logo y los links de la
            navbar transparente, y abajo para sostener la señal de scroll. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.06) 22%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.34) 100%)",
          }}
        />

        {/* Señal de que la página sigue hacia abajo.
            El posicionamiento vive en el contenedor: la animación de entrada
            usa transform y pisaría el centrado del ancla. */}
        <div className="scroll-cue-anchor absolute left-1/2 -translate-x-1/2">
          <a
            href="#pousada"
            aria-label="Ver mais"
            className="enter enter-d2 flex flex-col items-center gap-2 text-white/80"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
          >
            <span className="text-[0.6rem] uppercase tracking-[0.3em]">
              Descubra
            </span>
            <FaChevronDown className="scroll-cue text-lg" />
          </a>
        </div>
      </section>

      <PousadaSection />
      <QuartosSection quartos={quartosResumo} />
      <ExperienciasSection />
      <ReservarSection />
    </main>
  );
}
