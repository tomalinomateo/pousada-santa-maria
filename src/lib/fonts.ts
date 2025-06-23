import localFont from "next/font/local";

// Configuración manual de fuentes locales con múltiples pesos
export const stigma = localFont({
  src: [
    {
      path: "../../public/fonts/stigma/Stigma.otf",
      weight: "400",
      style: "normal",
    },
    // Agregar aquí más pesos cuando los tengas:
    // {
    //   path: "../../public/fonts/stigma/Stigma-Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/stigma/Stigma-Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
  ],
  variable: "--font-stigma",
  display: "swap",
});

export const laisha = localFont({
  src: [
    {
      path: "../../public/fonts/laisha/Laisha.otf",
      weight: "400",
      style: "normal",
    },
    // Agregar aquí más pesos cuando los tengas
  ],
  variable: "--font-laisha",
  display: "swap",
});

export const hashira = localFont({
  src: [
    {
      path: "../../public/fonts/hashira/Hashira.otf",
      weight: "400",
      style: "normal",
    },
    // Agregar aquí más pesos cuando los tengas
  ],
  variable: "--font-hashira",
  display: "swap",
});

export const cufatte = localFont({
  src: [
    {
      path: "../../public/fonts/cufatte/Cufatte.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cufatte",
  display: "swap",
});

export const lalemonti = localFont({
  src: [
    {
      path: "../../public/fonts/lalemonti/La Lemonti.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lalemonti/La Lemonti Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-lalemonti",
  display: "swap",
});

export const gerbil = localFont({
  src: [
    {
      path: "../../public/fonts/gerbil/Gerbil.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gerbil",
  display: "swap",
});

// Objeto con todas las fuentes locales
export const localFonts = {
  stigma,
  laisha,
  hashira,
  cufatte,
  lalemonti,
  gerbil,
  // Agrega aquí nuevas fuentes cuando las agregues a public/fonts/
  // ejemplo: nuevaFuente: localFont({ ... }),
};

// Configuración de pesos disponibles para cada fuente
export const fontWeights = {
  stigma: [
    { name: "Regular", weight: "400", class: "font-normal" },
    // { name: "Light", weight: "300", class: "font-light" },
    // { name: "Medium", weight: "500", class: "font-medium" },
    // { name: "Bold", weight: "700", class: "font-bold" },
  ],
  laisha: [
    { name: "Regular", weight: "400", class: "font-normal" },
    // { name: "Light", weight: "300", class: "font-light" },
    // { name: "Bold", weight: "700", class: "font-bold" },
  ],
  hashira: [
    { name: "Regular", weight: "400", class: "font-normal" },
    // { name: "Light", weight: "300", class: "font-light" },
    // { name: "Bold", weight: "700", class: "font-bold" },
  ],
  cufatte: [{ name: "Regular", weight: "400", class: "font-normal" }],
  lalemonti: [
    { name: "Regular", weight: "400", class: "font-normal" },
    { name: "Italic", weight: "400-italic", class: "italic" },
  ],
  gerbil: [{ name: "Regular", weight: "400", class: "font-normal" }],
};

// Función para obtener la configuración de fuentes para el FontSwitcher
export function getFontsConfig() {
  const localFontsList = Object.keys(localFonts).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    type: "local" as const,
    className: `font-${key}`,
    cssVariable: `var(--font-${key})`,
    weights: fontWeights[key as keyof typeof fontWeights] || [],
  }));

  return localFontsList;
}
