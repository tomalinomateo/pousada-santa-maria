import type { ImagemGaleria as Imagem } from "@/data/galeria";
import { fallbackSrc, toSrcSet } from "@/data/galeria";
import { getFoco } from "@/data/focos";

type ImagemGaleriaProps = {
  imagem: Imagem;
  /** Ancho que ocupará la imagen según el viewport, para que el browser elija versión */
  sizes: string;
  /** Sólo la primera imagen de cada galería: carga inmediata y prioritaria */
  priority?: boolean;
  className?: string;
};

/**
 * Foto del manifest, servida con <picture> nativo: AVIF con fallback a WebP.
 *
 * No usa next/image a propósito. Las imágenes ya vienen optimizadas por
 * scripts/optimize-images.js en ambos formatos y en varios anchos; pasarlas por
 * el optimizador de Next las recomprimiría y descartaría las versiones AVIF,
 * porque next/image emite un único <img> con su propio srcSet en vez de un
 * <picture> con negociación de formato.
 *
 * El blur se resuelve sin JavaScript: el placeholder del manifest se pinta como
 * fondo desenfocado detrás de la foto, y la foto lo tapa al terminar de cargar.
 * Eso mantiene este componente como server component, así el manifest no viaja
 * al bundle del browser.
 */
export default function ImagemGaleria({
  imagem,
  sizes,
  priority = false,
  className = "",
}: ImagemGaleriaProps) {
  const foco = getFoco(imagem.id);

  return (
    <>
      {/* Placeholder desenfocado, visible sólo hasta que la foto pinta encima */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url("${imagem.placeholder}")`,
          backgroundPosition: foco,
          filter: "blur(16px)",
          transform: "scale(1.1)",
        }}
      />
      <picture>
        <source
          type="image/avif"
          srcSet={toSrcSet(imagem, "avif")}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={toSrcSet(imagem, "webp")}
          sizes={sizes}
        />
        <img
          src={fallbackSrc(imagem)}
          alt={imagem.alt}
          width={imagem.ancho}
          height={imagem.alto}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
          data-fade
          // SiteMotion le agrega .is-loaded cuando la foto termina de cargar.
          // Dentro de un <Suspense> eso puede pasar antes de que React hidrate
          // el subárbol, y sin esto React lo reporta como desajuste.
          suppressHydrationWarning
          style={foco ? { objectPosition: foco } : undefined}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
      </picture>
    </>
  );
}
