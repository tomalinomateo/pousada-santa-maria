import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrlWithMessage } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";

// Card data for the grid
const EXPERIENCE_CARDS = [
  {
    slug: "4x4-lencois",
    title: "Passeios 4x4 pelos Lençóis Maranhenses",
    duration: "Opções de meio dia e dia inteiro",
    shortDescription:
      "Passeios privativos em veículo 4x4 saindo de Atins pelos Lençóis Maranhenses, com guia local experiente e paradas para banho e fotos. Dois roteiros possíveis: Canto de Atins e Ponta do Mangue ou Lagoa Azul e Lagoa Bonita, em opções de meio dia ou dia inteiro.",
    image: "/images/experiencias/lencois_1.jpg",
  },
  {
    slug: "kitesurf",
    title: "Aulas de Kitesurf",
    duration: "2 horas por aula",
    shortDescription:
      "Atins e os Lençóis Maranhenses são considerados um dos melhores destinos do Brasil para kitesurf: ventos constantes e regulares, águas rasas nas lagoas — ideais para iniciantes — e mar aberto para quem já pratica. As aulas são ministradas por instrutores qualificados e credenciados, com equipamento adequado e acompanhamento de segurança. É possível começar do zero ou evoluir técnica em sessões de duas horas, aproveitando a paisagem única de dunas e lagoas cristalinas.",
    image: "/images/experiencias/kitesurf.jpg",
  },
  {
    slug: "quadriciclo",
    title: "Passeio de Quadriciclo",
    duration: "Meio dia",
    shortDescription:
      "Passeio de quadriciclo saindo de Atins, percorrendo trilhas de areia, dunas e lagoas dos Lençóis Maranhenses com guia local credenciado. Roteiro de meio dia com duas opções de circuito: Grandes Lençóis – Ponta do Mangue ou Pequenos Lençóis, combinando paisagens de dunas, lagoas e praia.",
    image: "/images/experiencias/quadriciclo.jpg",
  },
  {
    slug: "lancha-rio-preguicas",
    title: "Passeio de Lancha pelo Rio Preguiças",
    duration: "Meio dia",
    shortDescription:
      "Passeio de lancha pelo Rio Preguiças, ideal para quem busca uma experiência mais local e autêntica, navegando por comunidades ribeirinhas e paisagens naturais que fazem parte do cotidiano da região. O passeio se encerra com a contemplação da revoada dos guarás, um espetáculo natural marcante, especialmente no fim da tarde.",
    image: "/images/experiencias/por_do_sol.jpeg",
  },
  {
    slug: "cavalo",
    title: "Passeio a Cavalo nos Lençóis Maranhenses",
    duration: "2 horas",
    shortDescription:
      "Passeio a cavalo pelas dunas e paisagens dos Lençóis Maranhenses, uma experiência tranquila e contemplativa, ideal para apreciar o pôr do sol em meio às lagoas e à imensidão das dunas, com acompanhamento de guia local. O passeio acontece no fim da tarde, aproveitando a luz mais suave e as cores do entardecer, proporcionando um momento especial de conexão com a natureza.",
    image: "/images/experiencias/cavalgadas.jpg",
  },
  {
    slug: "revoada-guaras",
    title: "Revoada dos Guarás",
    duration: "2 horas",
    shortDescription:
      "Experiência única para contemplar a revoada dos guarás, aves típicas da região, em seu espetáculo natural sobre manguezais e lagoas próximas a Atins, com acompanhamento de guia local que compartilha curiosidades sobre a fauna e o ecossistema.",
    image: "/images/experiencias/revoada_guaras.jpg",
  },
  {
    slug: "caiaque",
    title: "Passeio de Caiaque pelo Igarapé",
    duration: "3 horas",
    shortDescription:
      "Passeio tranquilo de caiaque pelo igarapé e trechos do Rio Preguiças próximos a Atins, ideal para quem busca uma experiência mais calma e contemplativa, em contato direto com a natureza e a vida ribeirinha local. O percurso permite observar a fauna e flora da região, além de apreciar a paisagem das margens e das pequenas comunidades ribeirinhas.",
    image: "/images/experiencias/kayak.jpg",
  },
  {
    slug: "planctons",
    title: "Passeio Noturno – Plânctons Bioluminescentes",
    duration: "2 horas",
    shortDescription:
      "Passeio de canoa realizado à noite para contemplar o fenômeno natural dos plânctons bioluminescentes nas águas próximas a Atins. Quanto mais escuro o ambiente, mais visível se torna o efeito luminoso, que acontece quando a água é movimentada pelos remos ou pelas mãos, criando um espetáculo natural impressionante.",
    image: "/images/experiencias/mar.jpeg",
  },
] as const;

// Grilla de dos columnas: el escalonado alterna entre par e impar.
const REVEAL_STAGGER = ["", "reveal-d1"];

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <PageHero
        surtitle="Pousada Santa Maria"
        title="Experiências"
        subtitle="Atins e os Lençóis: aventura, natureza e tranquilidade em roteiros que revelam dunas, lagoas e o ritmo simples do litoral."
      />

      {/* Cards grid */}
      <section className="px-4 md:px-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EXPERIENCE_CARDS.map((card, i) => (
            <article
              key={card.slug}
              className={`bg-white rounded-none shadow-md overflow-hidden flex flex-col ${
                REVEAL_STAGGER[i % REVEAL_STAGGER.length]
              }`}
              data-reveal="up"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  data-fade
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h2 className="text-lg md:text-xl font-semibold mb-1" style={{ color: "var(--text)" }}>
                  {card.title}
                </h2>
                {card.duration ? (
                  <p className="text-base text-gray-600 mb-3">
                    Duração: {card.duration}
                  </p>
                ) : null}
                <hr className="border-gray-200 mb-3" />
                <p className="text-base text-gray-500 flex-1">
                  {card.shortDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-12 text-center" data-reveal="up">
          <a
            href={getWhatsAppUrlWithMessage("Olá! Quero reservar uma experiência em Atins com vocês.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex items-center justify-center gap-2 px-8 py-3 rounded-none font-semibold shadow uppercase"
            style={{
              background: "var(--accent)",
              color: "var(--button-text)",
            }}
          >
            <FaWhatsapp className="text-lg shrink-0" />
            <span>Reservar experiência</span>
          </a>
        </div>
      </section>
    </main>
  );
}
