import Image from "next/image";
import ReservarButton from "@/components/ReservarButton";
import PageHero from "@/components/PageHero";

const mediumPhotos = [
  { src: "/images/pousada/pousada_3.jpg", alt: "Área externa da pousada" },
  { src: "/images/pousada/pousada_4.jpg", alt: "Redes e área de descanso" },
  { src: "/images/pousada/pousada_5.jpg", alt: "Detalhes da pousada" },
  { src: "/images/pousada/pousada_6.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_7.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_8.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_9.jpg", alt: "Pousada Santa Maria" },
  { src: "/images/pousada/pousada_10.jpg", alt: "Pousada Santa Maria" },
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
        subtitle="Pequena e tranquila em Atins: quartos confortáveis, áreas externas com verde, redes e a areia sempre por perto."
      />

      {/* Description */}
      <section className="mx-auto max-w-3xl px-6 pb-8 md:px-10 text-center">
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          A Santa Maria é pensada para quem gosta de voltar dos passeios, tomar um
          banho gostoso e descansar de verdade. Nada é exagerado: boa cama, bom
          chuveiro, luz natural, sombra e vento. O resto vem de Atins — o mar, o céu,
          o silêncio e os Lençóis logo ali.
        </p>
        <ReservarButton className="mt-8 bg-[#D6B24C] text-[#1C140D] hover:bg-[#e0c065]">
          Reservar agora
        </ReservarButton>
      </section>

      {/* One very large photo */}
      <section className="w-full px-0">
        <div className="relative flex min-h-[80vh] w-full items-center justify-center" style={{ background: "var(--page-bg)" }}>
          <Image
            src="/images/pousada/pousada_2.jpg"
            alt="Vista da pousada Santa Maria"
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
