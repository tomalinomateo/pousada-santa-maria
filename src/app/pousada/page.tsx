import Image from "next/image";
import ReservarButton from "@/components/ReservarButton";
import PageHero from "@/components/PageHero";

const mediumPhotos = [
  {
    src: "/images/pousada/pousada_11.jpg",
    alt: "Área de convivência da pousada à noite",
  },
  { src: "/images/pousada/pousada_4.jpg", alt: "Redes e área de descanso" },
  { src: "/images/pousada/pousada_5.jpg", alt: "Detalhes da pousada" },
  { src: "/images/pousada/pousada_6.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_7.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_8.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_9.jpg", alt: "Pousada Santa Maria" },
  {
    src: "/images/pousada/pousada_12.jpg",
    alt: "Deck sobre o mar ao entardecer",
  },
  {
    src: "/images/pousada/pousada_13.jpg",
    alt: "Corredor da pousada à noite",
  },
  {
    src: "/images/pousada/pousada_15.jpg",
    alt: "Cerveja gelada no deck ao pôr do sol",
  },
];

export default function PousadaPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--page-bg)" }}
    >
      <PageHero
        surtitle="Pousada Santa Maria"
        title="A Pousada"
        subtitle="Pequena e tranquila em Atins, com quartos confortáveis, áreas externas acolhedoras e a natureza sempre por perto."
      />

      {/* Description */}
      <section className="mx-auto max-w-3xl px-6 pb-8 md:px-10 text-center">
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          A Santa Maria foi pensada para quem quer viver Atins com calma e conforto. Quartos acolhedores, banho gostoso, luz natural e uma atmosfera tranquila convidam ao descanso. Pela manhã, o café da manhã bem servido completa a experiência.
        </p>
        <ReservarButton className="mt-8 bg-[#D6B24C] text-[#1C140D] hover:bg-[#e0c065]">
          Reservar agora
        </ReservarButton>
      </section>

      {/* One very large photo */}
      <section className="w-full px-0">
        <div className="relative flex min-h-[80vh] w-full items-center justify-center" style={{ background: "var(--page-bg)" }}>
          <Image
            src="/images/pousada/pousada_sunset.jpg"
            alt="Deck da pousada Santa Maria sobre o mar ao pôr do sol"
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Photos in rows of 3 - larger */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 pb-12 md:pb-16 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {mediumPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-none"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
