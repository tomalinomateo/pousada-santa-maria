import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-stigma)", "sans-serif"],
        stigma: ["var(--font-stigma)", "sans-serif"],
        josefin: ["var(--font-josefin-sans)", "sans-serif"],
      },
      fontSize: {
        stigma: ["1.15em", "1.4"],
      },
      colors: {
        brand: {
          gold: "#D6B24C",
          black: "#222222",
          gray: "#444444",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
