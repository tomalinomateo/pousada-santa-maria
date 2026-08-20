import { quartosList } from "./quartos-list";
import { getCapa, getGaleriaComCapaPrimeiro } from "./galeria-manifest";
import type { ImagemGaleria } from "./galeria";

function nomeToSlug(nome: string): string {
  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export type Quarto = {
  id: number;
  nome: string;
  /** Ausente mientras no esté cargada: el sitio omite el dato en vez de inventarlo */
  capacidade?: number;
  grupo: string;
  slug: string;
  /** Fotos del cuarto: la portada primero, el resto en el orden del manifest */
  imagens: ImagemGaleria[];
  /** Portada para grillas y carruseles */
  capa?: ImagemGaleria;
};

const todosOsQuartos: Quarto[] = quartosList.map((entry, index) => ({
  id: index + 1,
  nome: entry.nome,
  capacidade: entry.capacidade,
  grupo: entry.grupo,
  slug: nomeToSlug(entry.nome),
  imagens: getGaleriaComCapaPrimeiro(entry.grupo, entry.capaId),
  capa: getCapa(entry.grupo, entry.capaId),
}));

/** Cuartos declarados en la lista que todavía no tienen fotos en el manifest. */
export const quartosSemFotos: Quarto[] = todosOsQuartos.filter(
  (quarto) => quarto.imagens.length === 0
);

/**
 * Cuartos que el sitio publica. Se publican todos, incluso los que todavía no
 * tienen fotos: esos aparecen con el recuadro de imagen vacío y la galería en
 * blanco hasta que su grupo exista en el manifest. Agregar las fotos y
 * regenerar el manifest los completa solo, sin tocar código.
 *
 * Este módulo importa el manifest (vía ./galeria-manifest). Usalo sólo desde
 * server components y pasá los cuartos por props: así el JSON no entra al
 * bundle del browser.
 */
export const quartos: Quarto[] = todosOsQuartos;

if (quartosSemFotos.length > 0) {
  console.warn(
    `[quartos] Publicados sin fotos, con la galería vacía: ${quartosSemFotos
      .map((q) => `${q.nome} (falta el grupo "${q.grupo}" en el manifest)`)
      .join(", ")}`
  );
}

export function getQuartoBySlug(slug: string): Quarto | undefined {
  return quartos.find((q) => q.slug === slug);
}

/**
 * Versión liviana, sin la galería completa: sólo lo que necesitan las vistas que
 * muestran la portada (el carrusel del home). Evita serializar los placeholders
 * de todas las fotos en páginas que no las van a mostrar.
 */
export type QuartoResumo = Pick<
  Quarto,
  "id" | "nome" | "slug" | "capacidade" | "capa"
>;

export const quartosResumo: QuartoResumo[] = quartos.map(
  ({ id, nome, slug, capacidade, capa }) => ({
    id,
    nome,
    slug,
    capacidade,
    capa,
  })
);
