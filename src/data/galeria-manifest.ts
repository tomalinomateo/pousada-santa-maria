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
 * Fotos de un grupo, con las de `ordemIds` adelante y en ese orden. Los ids que
 * no existan en el grupo se ignoran; el resto de las fotos sigue el orden del
 * manifest.
 */
export function getGaleriaOrdenada(
  grupo: string,
  ordemIds?: string[]
): ImagemGaleria[] {
  const imagens = getGaleria(grupo);
  if (!ordemIds || ordemIds.length === 0) return imagens;

  const fixadas = ordemIds
    .map((id) => imagens.find((imagem) => imagem.id === id))
    .filter((imagem): imagem is ImagemGaleria => imagem !== undefined);
  const fixadasIds = new Set(fixadas.map((imagem) => imagem.id));

  return [...fixadas, ...imagens.filter((imagem) => !fixadasIds.has(imagem.id))];
}

/**
 * Foto de portada de un grupo: la primera de la galería ya ordenada, así la
 * portada es siempre la misma que abre la galería del cuarto.
 */
export function getCapa(
  grupo: string,
  ordemIds?: string[]
): ImagemGaleria | undefined {
  return getGaleriaOrdenada(grupo, ordemIds)[0];
}
