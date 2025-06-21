"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const FONTS = [
  {
    name: "Josefin Sans",
    url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap",
  },
  {
    name: "Simonetta",
    url: "https://fonts.googleapis.com/css2?family=Simonetta:wght@400;900&display=swap",
  },
  {
    name: "Fondamento",
    url: "https://fonts.googleapis.com/css2?family=Fondamento:ital,wght@0,400;1,400&display=swap",
  },
  {
    name: "Lora",
    url: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
  },
  {
    name: "Quicksand",
    url: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap",
  },
  {
    name: "Alegreya",
    url: "https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap",
  },
  {
    name: "Marcellus",
    url: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
  },
  {
    name: "Indie Flower",
    url: "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap",
  },
  {
    name: "Shadows Into Light",
    url: "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap",
  },
  {
    name: "Raleway",
    url: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
  },
  {
    name: "Dancing Script",
    url: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
  },
];

export default function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(FONTS[0].name);

  const setFont = (font: (typeof FONTS)[0]) => {
    if (font.name !== "Josefin Sans") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = font.url;
      document.head.appendChild(link);
    }

    document.body.style.fontFamily = font.name + ", sans-serif";
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
              style={{ fontFamily: font.name }}
            >
              {font.name}
              {selectedFont === font.name && <FaCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
