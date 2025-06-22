"use client";

import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { getFontsConfig } from "@/lib/fonts";

type Font = {
  name: string;
  type: "google" | "local";
  url?: string;
  className: string;
  cssVariable?: string;
};

// Obtener fuentes locales automáticamente
const localFonts = getFontsConfig();

// Fuentes de Google (siempre al final)
const googleFonts: Font[] = [
  {
    name: "Josefin Sans",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap",
    className: "font-josefin",
    cssVariable: "var(--font-josefin-sans)",
  },
  {
    name: "Simonetta",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Simonetta:wght@400;900&display=swap",
    className: "",
  },
  {
    name: "Fondamento",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Fondamento:ital,wght@0,400;1,400&display=swap",
    className: "",
  },
  {
    name: "Lora",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
    className: "",
  },
  {
    name: "Quicksand",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap",
    className: "",
  },
  {
    name: "Alegreya",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap",
    className: "",
  },
  {
    name: "Marcellus",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
    className: "",
  },
  {
    name: "Indie Flower",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap",
    className: "",
  },
  {
    name: "Shadows Into Light",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap",
    className: "",
  },
  {
    name: "Raleway",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
    className: "",
  },
  {
    name: "Dancing Script",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
    className: "",
  },
];

// Combinar fuentes locales (primero) con fuentes de Google (al final)
const FONTS: Font[] = [...localFonts, ...googleFonts];

export default function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(FONTS[0].name);

  // Aplicar la fuente por defecto al montar el componente
  useEffect(() => {
    const defaultFont = FONTS[0]; // Primera fuente local
    console.log("Aplicando fuente por defecto:", defaultFont.name);

    // Remover todas las clases de fuentes anteriores
    const allClasses = FONTS.map((font) => font.className).filter(Boolean);
    document.body.classList.remove(...allClasses);

    // Aplicar fuente por defecto
    if (defaultFont.type === "local") {
      document.body.style.fontFamily = defaultFont.cssVariable + ", sans-serif";
      document.body.classList.add(defaultFont.className);
    }

    console.log(
      "Fuente por defecto aplicada:",
      defaultFont.name,
      "Variable:",
      defaultFont.cssVariable
    );
    console.log("FontFamily actual:", document.body.style.fontFamily);
    console.log("Clases actuales:", document.body.className);
  }, []);

  const setFont = (font: Font) => {
    console.log("Aplicando fuente:", font.name, font.type);

    // Remover todas las clases de fuentes anteriores
    const allClasses = FONTS.map((font) => font.className).filter(Boolean);
    document.body.classList.remove(...allClasses);

    if (font.type === "google") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = font.url!;
      document.head.appendChild(link);
      document.body.style.fontFamily = font.name + ", sans-serif";
      console.log("Fuente Google aplicada:", font.name);
    } else if (font.type === "local") {
      // Para fuentes locales, usar las variables CSS de Next.js
      document.body.style.fontFamily = font.cssVariable + ", sans-serif";
      document.body.classList.add(font.className);
      console.log(
        "Fuente local aplicada:",
        font.name,
        "Variable:",
        font.cssVariable
      );
    }

    console.log("FontFamily actual:", document.body.style.fontFamily);
    console.log("Clases actuales:", document.body.className);

    setSelectedFont(font.name);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-[#4C583E] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl font-bold border-2 border-white hover:scale-110 transition"
        title="Cambiar fuente"
      >
        Aa
      </button>
      {open && (
        <div className="absolute bottom-16 right-0 bg-[#4C583E] rounded-lg shadow-xl border border-white/20 p-3 flex flex-col gap-2 min-w-[200px] max-h-[60vh] overflow-auto">
          {FONTS.map((font) => (
            <button
              key={font.name}
              onClick={() => setFont(font)}
              className="text-left px-3 py-2 rounded hover:bg-white/10 transition font-semibold text-white flex items-center justify-between"
              style={{
                fontFamily:
                  font.type === "google"
                    ? font.name
                    : font.cssVariable || "inherit",
              }}
            >
              <span className={font.type === "local" ? font.className : ""}>
                {font.name}
              </span>
              {selectedFont === font.name && <FaCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
