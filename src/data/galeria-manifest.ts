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
 * Foto de portada de un grupo. Si se pasa `id` y existe en el grupo, se usa esa;
 * si no, la primera del grupo.
 */
export function getCapa(grupo: string, id?: string): ImagemGaleria | undefined {
  const imagens = getGaleria(grupo);
  if (imagens.length === 0) return undefined;
  if (id) {
    const escolhida = imagens.find((imagem) => imagem.id === id);
    if (escolhida) return escolhida;
  }
  return imagens[0];
}

/**
 * Fotos de un grupo con la portada primero. El resto conserva el orden del
 * manifest; así la galería del cuarto abre con la misma foto que se ve en las
 * grillas y los carruseles.
 */
export function getGaleriaComCapaPrimeiro(
  grupo: string,
  id?: string
): ImagemGaleria[] {
  const imagens = getGaleria(grupo);
  const capa = getCapa(grupo, id);
  if (!capa) return imagens;
  return [capa, ...imagens.filter((imagem) => imagem.id !== capa.id)];
}
