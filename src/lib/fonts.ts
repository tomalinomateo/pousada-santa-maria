import localFont from "next/font/local";

export const stigma = localFont({
  src: [
    {
      path: "../../public/fonts/stigma/Stigma.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-stigma",
  display: "swap",
});

export const localFonts = {
  stigma,
};

export const fontWeights = {
  stigma: [{ name: "Regular", weight: "400", class: "font-normal" }],
};

export function getFontsConfig() {
  return Object.keys(localFonts).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    type: "local" as const,
    className: `font-${key}`,
    cssVariable: `var(--font-${key})`,
    weights: fontWeights[key as keyof typeof fontWeights] || [],
  }));
}
