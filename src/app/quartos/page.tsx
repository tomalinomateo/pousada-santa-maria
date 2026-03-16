import { quartos } from "@/data/quartos";
import QuartosGrid from "@/components/QuartosGrid";
import ReservarButton from "@/components/ReservarButton";

export default function QuartosPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--page-bg)" }}
    >
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 px-4 md:px-8 text-center">
        <p
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-2"
          style={{ color: "var(--accent)" }}
        >
          Pousada Santa Maria
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase mb-4"
          style={{ color: "var(--text)" }}
        >
          Quartos
        </h1>
        <p
          className="text-lg md:text-xl max-w-xl mx-auto normal-case tracking-wide"
          style={{ color: "var(--text)" }}
        >
          Conheça nossos quartos e villas em Atins, Lençóis Maranhenses.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12">
        <QuartosGrid quartos={quartos} />
      </section>

      <section className="px-4 md:px-8 pt-4 pb-16 md:pt-6 md:pb-20 flex justify-center">
        <ReservarButton>Reservar um quarto</ReservarButton>
      </section>
    </main>
  );
}
