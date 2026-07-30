/**
 * Tipos y helpers puros de las imágenes optimizadas.
 *
 * Este módulo NO importa el manifest a propósito: lo usan componentes cliente
 * (ImagemGaleria), y arrastrar el JSON acá metería ~74 KB en el bundle del
 * browser. El acceso al manifest vive en ./galeria-manifest, que sólo importan
 * server components.
 */

export type VersaoImagem = {
  /** Ancho en píxeles de esta versión */
  ancho: number;
  /** Ruta pública del archivo AVIF */
  avif: string;
  /** Ruta pública del archivo WebP */
  webp: string;
};

export type ImagemGaleria = {
  id: string;
  /** Texto alternativo. Vacío en el manifest actual: falta completarlo. */
  alt: string;
  /** Ancho del original, para declarar la relación de aspecto */
  ancho: number;
  /** Alto del original, para declarar la relación de aspecto */
  alto: number;
  /** Data URI base64 de baja resolución, usado como blur mientras carga */
  placeholder: string;
  /** Versiones disponibles, de menor a mayor ancho */
  versiones: VersaoImagem[];
};

/** srcSet listo para usar, en el formato pedido, ordenado por ancho. */
export function toSrcSet(
  imagem: ImagemGaleria,
  formato: "avif" | "webp"
): string {
  return imagem.versiones
    .map((versao) => `${versao[formato]} ${versao.ancho}w`)
    .join(", ");
}

/** Ruta del WebP más grande: fallback final del <img>. */
export function fallbackSrc(imagem: ImagemGaleria): string {
  const maior = imagem.versiones[imagem.versiones.length - 1];
  return maior.webp;
}
