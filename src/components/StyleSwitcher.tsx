"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const STYLES = [
  {
    name: "Coco",
    colors: {
      "--main-bg": "#CBB89D",
      "--section-bg": "#EDE1D2",
      "--accent": "#806044",
      "--text": "#412F26",
      "--button": "#806044",
      "--button-text": "#EDE1D2",
    },
  },
  {
    name: "Selva",
    colors: {
      "--main-bg": "#DADED8", // Aloe
      "--section-bg": "#4C583E", // Cypress
      "--accent": "#2C3424", // Moss
      "--text": "#2C3424", // Moss
      "--button": "#4C583E", // Cypress
      "--button-text": "#EDE1D2",
    },
  },
  {
    name: "Dunas",
    colors: {
      "--main-bg": "#DADED8", // Aloe
      "--section-bg": "#959581", // Cedar
      "--accent": "#4C583E", // Cypress
      "--text": "#2C3424", // Moss
      "--button": "#4C583E", // Cypress
      "--button-text": "#DADED8", // Aloe
    },
  },
  {
    name: "Natural",
    colors: {
      "--main-bg": "#768064", // Olive
      "--section-bg": "#DADED8", // Aloe
      "--accent": "#959581", // Cedar
      "--text": "#2C3424", // Moss
      "--button": "#959581", // Cedar
      "--button-text": "#DADED8", // Aloe
    },
  },
  {
    name: "Clássico",
    colors: {
      "--main-bg": "#DADED8", // Aloe
      "--section-bg": "#2C3424", // Moss
      "--accent": "#4C583E", // Cypress
      "--text": "#DADED8", // Aloe
      "--button": "#4C583E", // Cypress
      "--button-text": "#2C3424", // Moss
    },
  },
  {
    name: "Minimal",
    colors: {
      "--main-bg": "#DADED8", // Aloe
      "--section-bg": "#FFFFFF", // Blanco
      "--accent": "#768064", // Olive
      "--text": "#2C3424", // Moss
      "--button": "#768064", // Olive
      "--button-text": "#DADED8", // Aloe
    },
  },
  {
    name: "Oliva",
    colors: {
      "--main-bg": "#BFB8AA",
      "--section-bg": "#737153",
      "--accent": "#8C775E",
      "--text": "#26170F",
      "--button": "#8C775E",
      "--button-text": "#BFB8AA",
    },
  },
  {
    name: "Tierra",
    colors: {
      "--main-bg": "#8C775E",
      "--section-bg": "#BFB8AA",
      "--accent": "#593F28",
      "--text": "#26170F",
      "--button": "#593F28",
      "--button-text": "#BFB8AA",
    },
  },
  {
    name: "Bosque",
    colors: {
      "--main-bg": "#737153",
      "--section-bg": "#BFB8AA",
      "--accent": "#26170F",
      "--text": "#BFB8AA",
      "--button": "#26170F",
      "--button-text": "#BFB8AA",
    },
  },
  {
    name: "Corteza",
    colors: {
      "--main-bg": "#593F28",
      "--section-bg": "#8C775E",
      "--accent": "#BFB8AA",
      "--text": "#EDE1D2",
      "--button": "#8C775E",
      "--button-text": "#26170F",
    },
  },
  {
    name: "Raíz",
    colors: {
      "--main-bg": "#26170F",
      "--section-bg": "#8C775E",
      "--accent": "#BFB8AA",
      "--text": "#BFB8AA",
      "--button": "#8C775E",
      "--button-text": "#26170F",
    },
  },
  {
    name: "Orgánico",
    colors: {
      "--main-bg": "#EDE1D2",
      "--section-bg": "#6A6F4C",
      "--accent": "#CBB89D",
      "--text": "#412F26",
      "--button": "#6A6F4C",
      "--button-text": "#EDE1D2",
    },
  },
  {
    name: "Arena",
    colors: {
      "--main-bg": "#EDE1D2",
      "--section-bg": "#CBB89D",
      "--accent": "#6A6F4C",
      "--text": "#412F26",
      "--button": "#CBB89D",
      "--button-text": "#412F26",
    },
  },
  {
    name: "Cacao",
    colors: {
      "--main-bg": "#806044",
      "--section-bg": "#EDE1D2",
      "--accent": "#CBB89D",
      "--text": "#EDE1D2",
      "--button": "#412F26",
      "--button-text": "#EDE1D2",
    },
  },
  {
    name: "Manteca",
    colors: {
      "--main-bg": "#CBB89D",
      "--section-bg": "#EDE1D2",
      "--accent": "#6A6F4C",
      "--text": "#412F26",
      "--button": "#6A6F4C",
      "--button-text": "#EDE1D2",
    },
  },
];

export default function StyleSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0].name);

  const setStyle = (style: (typeof STYLES)[0]) => {
    Object.entries(style.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    setSelectedStyle(style.name);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-24 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-[#4C583E] text-[#DADED8] rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl font-bold border-2 border-white hover:scale-110 transition"
        title="Cambiar estilo visual"
      >
        🎨
      </button>
      {open && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border p-3 flex flex-col gap-2 min-w-[200px] max-h-[60vh] overflow-auto">
          {STYLES.map((style) => (
            <button
              key={style.name}
              onClick={() => setStyle(style)}
              className="text-left px-3 py-2 rounded hover:bg-[#f6e9c7] transition font-semibold flex items-center justify-between gap-2"
              style={{
                color: style.colors["--accent"],
                background: style.colors["--main-bg"],
                border: `1px solid ${style.colors["--section-bg"]}`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  style={{
                    width: 18,
                    height: 18,
                    background: style.colors["--accent"],
                    borderRadius: "50%",
                    display: "inline-block",
                    border: `2px solid ${style.colors["--button"]}`,
                  }}
                />
                {style.name}
              </div>
              {selectedStyle === style.name && <FaCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
