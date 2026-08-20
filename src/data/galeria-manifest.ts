/**
 * Acceso al manifest de imágenes optimizadas (public/img/manifest.json).
 *
 * El manifest lo genera scripts/optimize-images.js y contiene, por grupo (una
 * carpeta por cuarto), la lista de fotos con sus versiones en AVIF y WebP en
 * varios anchos, más un placeholder base64 para el blur.
 *
 * IMPORTANTE: importar este módulo arrastra el manifest completo (~74 KB) al
 * bundle correspondiente. Usalo sólo desde server components y pasá los datos
 * por props a los componentes cliente.
 */
import manifest from "../../public/img/manifest.json";
import type { ImagemGaleria } from "./galeria";

const galerias = manifest as Record<string, ImagemGaleria[]>;

/** Devuelve las fotos de un grupo del manifest, o [] si el grupo no existe. */
export function getGaleria(grupo: string): ImagemGaleria[] {
  return galerias[grupo] ?? [];
}

/**
 * Orden manual de la galería de un grupo: ids fijados al principio y al final.
 * Lo que no se nombra queda en el medio, en el orden del manifest.
 */
export type OrdemGaleria = {
  /** Ids que van primero, en este orden. El primero es además la portada. */
  inicio?: string[];
  /** Ids que van últimos, en este orden. */
  fim?: string[];
};

/**
 * Fotos de un grupo con el orden manual aplicado. Los ids que no existan en el
 * grupo se ignoran, y un id repetido en `inicio` y `fim` sólo cuenta al inicio.
 */
export function getGaleriaOrdenada(
  grupo: string,
  ordem?: OrdemGaleria,
): ImagemGaleria[] {
  const imagens = getGaleria(grupo);
  if (!ordem) return imagens;

  const fixar = (ids: string[] | undefined, jaFixados: Set<string>) =>
    (ids ?? [])
      .map((id) => imagens.find((imagem) => imagem.id === id))
      .filter(
        (imagem): imagem is ImagemGaleria =>
          imagem !== undefined && !jaFixados.has(imagem.id),
      );

  const inicio = fixar(ordem.inicio, new Set());
  const fixados = new Set(inicio.map((imagem) => imagem.id));
  const fim = fixar(ordem.fim, fixados);
  for (const imagem of fim) fixados.add(imagem.id);

  const meio = imagens.filter((imagem) => !fixados.has(imagem.id));
  return [...inicio, ...meio, ...fim];
}

/**
 * Foto de portada de un grupo: la primera de la galería ya ordenada, así la
 * portada es siempre la misma que abre la galería del cuarto.
 */
export function getCapa(
  grupo: string,
  ordem?: OrdemGaleria,
): ImagemGaleria | undefined {
  return getGaleriaOrdenada(grupo, ordem)[0];
}
