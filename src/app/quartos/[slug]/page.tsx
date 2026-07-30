import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa";
import { quartos, getQuartoBySlug } from "@/data/quartos";
import ImagemGaleria from "@/components/ImagemGaleria";
import ReservarButton from "@/components/ReservarButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return quartos.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const quarto = getQuartoBySlug(slug);
  if (!quarto) return { title: "Quarto não encontrado" };
  return {
    title: `${quarto.nome} | Pousada Santa Maria`,
    description:
      quarto.capacidade !== undefined
        ? `Quarto ${quarto.nome} - até ${quarto.capacidade} pessoas. Reserve por WhatsApp.`
        : `Quarto ${quarto.nome} na Pousada Santa Maria, em Atins. Reserve por WhatsApp.`,
  };
}

export default async function QuartoDetailPage({ params }: Props) {
  const { slug } = await params;
  const quarto = getQuartoBySlug(slug);
  if (!quarto) notFound();

  return (
    <main
      className="min-h-screen pt-24 pb-12 md:pb-16"
      style={{ background: "var(--page-bg)" }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link
          href="/quartos"
          className="inline-flex items-center gap-2 mb-8 font-semibold uppercase tracking-wide text-sm hover:opacity-80 transition-all duration-500 ease-out"
          style={{ color: "var(--accent)" }}
        >
          <FaArrowLeft />
          Voltar aos quartos
        </Link>

        <header className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold uppercase mb-2"
            style={{ color: "var(--accent)" }}
          >
            {quarto.nome}
          </h1>
          {quarto.capacidade !== undefined && (
            <p
              className="text-base"
              style={{ color: "var(--text)" }}
            >
              Até {quarto.capacidade} pessoas
            </p>
          )}
        </header>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {quarto.imagens.map((imagem, i) => (
            <div
              key={imagem.id}
              className="relative aspect-[4/3] rounded-none overflow-hidden bg-[var(--card-bg)]"
            >
              {/* Grilla de 2 columnas dentro de max-w-4xl: ~408px por columna */}
              <ImagemGaleria
                imagem={imagem}
                sizes="(max-width: 640px) 100vw, (max-width: 896px) 50vw, 408px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <ReservarButton roomName={quarto.nome} className="w-full sm:w-auto">
          Reservar este quarto
        </ReservarButton>
      </div>
    </main>
  );
}
