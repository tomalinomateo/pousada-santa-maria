"use client";

import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { getFontsConfig } from "@/lib/fonts";
import FontWeightSelector from "./FontWeightSelector";

type Font = {
  name: string;
  type: "google" | "local";
  url?: string;
  className: string;
  cssVariable?: string;
  weights?: Array<{ name: string; weight: string; class: string }>;
};

type FontWeight = {
  name: string;
  weight: string;
  class: string;
};

// Función para acortar nombres de fuentes
function getShortFontName(fullName: string): string {
  return fullName.split(" ")[0];
}

// Obtener fuentes locales automáticamente
const localFonts = getFontsConfig();

// Fuentes de Google (siempre al final)
const googleFonts: Font[] = [
  {
    name: "Cormorant Garamond",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Medium", weight: "500", class: "font-medium" },
      { name: "SemiBold", weight: "600", class: "font-semibold" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Libre Baskerville",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "EB Garamond",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Medium", weight: "500", class: "font-medium" },
      { name: "SemiBold", weight: "600", class: "font-semibold" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Josefin Sans",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap",
    className: "font-josefin",
    cssVariable: "var(--font-josefin-sans)",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Simonetta",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Simonetta:wght@400;900&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Black", weight: "900", class: "font-black" },
    ],
  },
  {
    name: "Lora",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Quicksand",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Alegreya",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
  {
    name: "Marcellus",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
    className: "",
    weights: [{ name: "Regular", weight: "400", class: "font-normal" }],
  },
  {
    name: "Raleway",
    type: "google",
    url: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
    className: "",
    weights: [
      { name: "Regular", weight: "400", class: "font-normal" },
      { name: "Bold", weight: "700", class: "font-bold" },
    ],
  },
];

// Combinar fuentes locales (primero) con fuentes de Google (al final)
const FONTS: Font[] = [...localFonts, ...googleFonts];

export default function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(FONTS[0].name);
  const [currentWeight, setCurrentWeight] = useState("400");

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

    // Resetear peso de fuente
    document.body.style.fontWeight = "";
    document.body.classList.remove(
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-black",
      "italic"
    );

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
    setCurrentWeight("400"); // Resetear al peso por defecto
    setOpen(false);
  };

  const setFontWeight = (weight: FontWeight) => {
    console.log("Aplicando peso:", weight.name, weight.weight);

    // Obtener la fuente actual
    const currentFont = FONTS.find((font) => font.name === selectedFont);

    // Remover clases de peso anteriores
    document.body.classList.remove(
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-black",
      "italic"
    );

    // Aplicar nueva clase de peso
    if (weight.class === "italic") {
      document.body.classList.add("italic");
    } else if (weight.class !== "font-normal") {
      document.body.classList.add(weight.class);
    }

    // Para fuentes de Google, también aplicar el fontWeight en el estilo CSS
    if (currentFont?.type === "google") {
      document.body.style.fontWeight = weight.weight;
    } else {
      // Para fuentes locales, resetear el fontWeight
      document.body.style.fontWeight = "";
    }

    setCurrentWeight(weight.weight);
  };

  // Obtener la fuente actual seleccionada
  const currentFont = FONTS.find((font) => font.name === selectedFont);

  return (
    <>
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
                  {getShortFontName(font.name)}
                </span>
                {selectedFont === font.name && <FaCheck />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selector de peso de fuente */}
      <FontWeightSelector
        fontName={getShortFontName(currentFont?.name || FONTS[0].name)}
        weights={currentFont?.weights || []}
        onWeightChange={setFontWeight}
        currentWeight={currentWeight}
      />
    </>
  );
}
