import { quartos } from "@/data/quartos";
import QuartosGrid from "@/components/QuartosGrid";
import ReservarButton from "@/components/ReservarButton";
import PageHero from "@/components/PageHero";

export default function QuartosPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--page-bg)" }}
    >
      <PageHero
        surtitle="Pousada Santa Maria"
        title="Quartos"
        subtitle="Conheça nossos quartos e villas em Atins, Lençóis Maranhenses."
      />

      <section className="px-4 md:px-8 pb-12">
        <QuartosGrid quartos={quartos} />
      </section>

      <section className="px-4 md:px-8 pt-4 pb-12 md:pt-6 md:pb-16 flex justify-center">
        <ReservarButton>Reservar um quarto</ReservarButton>
      </section>
    </main>
  );
}
