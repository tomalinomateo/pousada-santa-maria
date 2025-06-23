import localFont from "next/font/local";

// Configuración manual de fuentes locales
// Agrega aquí las fuentes que tienes en public/fonts/
export const stigma = localFont({
  src: [
    {
      path: "../../public/fonts/stigma/Stigma.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/stigma/Stigma.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-stigma",
  display: "swap",
});

export const laisha = localFont({
  src: [
    {
      path: "../../public/fonts/laisha/Laisha.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/laisha/Laisha.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-laisha",
  display: "swap",
});

// Objeto con todas las fuentes locales
export const localFonts = {
  stigma,
  laisha,
  // Agrega aquí nuevas fuentes cuando las agregues a public/fonts/
  // ejemplo: nuevaFuente: localFont({ ... }),
};

// Función para obtener la configuración de fuentes para el FontSwitcher
export function getFontsConfig() {
  const localFontsList = Object.keys(localFonts).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    type: "local" as const,
    className: `font-${key}`,
    cssVariable: `var(--font-${key})`,
  }));

  return localFontsList;
}
