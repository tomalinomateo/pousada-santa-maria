import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const GOLD = "var(--accent, #D6B24C)";

const MainExperience = {
  nome: "Lençóis Maranhenses",
  imagem: "/images/experiencias/lencois_1.jpg",
};

const subExperiences = [
  {
    nome: "Aulas de Kitesurf",
    imagem: "/images/experiencias/kitesurf.jpg",
  },
  {
    nome: "Cavalgadas",
    imagem: "/images/experiencias/cavalgadas.jpg",
  },
  {
    nome: "Revoada dos Guarás",
    imagem: "/images/experiencias/revoada_guaras.jpg",
  },
  {
    nome: "Passeios de Quadriciclo",
    imagem: "/images/experiencias/quadriciclo.jpg",
  },
];

interface ExperienceCardProps {
  nome: string;
  imagem: string;
  imageHeight?: string;
  imagePosition?: string;
  delayClass?: string;
}

// Las tarjetas de la grilla entran una detrás de la otra.
const REVEAL_STAGGER = ["reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4"];

const ExperienceCard = ({
  nome,
  imagem,
  imageHeight = "h-64",
  imagePosition = "",
  delayClass = "",
}: ExperienceCardProps) => (
  <Link
    href="/experiencias"
    className={`exp-card relative block shadow-lg overflow-hidden group reveal-child ${delayClass} ${imageHeight}`}
  >
    <Image
      src={imagem}
      alt={nome}
      fill
      className={`card-zoom object-cover ${imagePosition}`}
      data-fade
    />
    {/* El velo se intensifica en hover: el título gana contraste al acercarse */}
    <div className="exp-veil absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="exp-title absolute bottom-0 left-0 p-4 md:p-6">
      <h3
        className={`font-bold uppercase tracking-wider text-white ${
          imageHeight === "h-96" ? "text-2xl md:text-4xl" : "text-xl"
        }`}
      >
        {nome}
      </h3>
    </div>
  </Link>
);

export default function ExperienciasSection() {
  return (
    <section
      className="py-8 md:py-14"
      style={{
        background: "var(--section-bg, #F3F4F6)",
        color: "var(--text, #222)",
        marginBottom: 32,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          className="text-2xl md:text-4xl text-center mb-6 md:mb-10 tracking-widest uppercase font-bold"
          style={{ color: GOLD }}
          data-reveal="up"
        >
          Experiências
        </h2>
        <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto mb-8">
          <p
            className="text-lg reveal-d1"
            style={{ color: "var(--text, #444)" }}
            data-reveal="up"
          >
            Descubra os Lençóis Maranhenses com a Pousada Santa Maria:
            cavalgadas nas dunas, kitesurf nas lagoas e aventuras de
            quadriciclo. Uma experiência única em cada detalhe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal="group">
          <div className="md:col-span-2">
            <ExperienceCard
              nome={MainExperience.nome}
              imagem={MainExperience.imagem}
              imageHeight="h-96"
              imagePosition="object-[30%_center] md:object-center"
            />
          </div>

          {subExperiences.map((exp, i) => (
            <ExperienceCard
              key={exp.nome}
              nome={exp.nome}
              imagem={exp.imagem}
              delayClass={REVEAL_STAGGER[i % REVEAL_STAGGER.length]}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12" data-reveal="up">
          <Link href="/experiencias">
            <button
              style={{
                background: GOLD,
                color: "var(--button-text, #222)",
              }}
              className="btn-motion w-full md:w-auto px-8 py-3 font-semibold shadow-lg uppercase flex items-center justify-center gap-2 text-lg"
            >
              <span className="md:hidden">Experiências</span>
              <span className="hidden md:inline">
                Ver todas as experiências
              </span>
              <FaArrowRight className="btn-arrow ml-1 text-base" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
