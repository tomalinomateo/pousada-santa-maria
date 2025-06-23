"use client";

import { useState } from "react";
import { FaCheck, FaBold } from "react-icons/fa";

type FontWeight = {
  name: string;
  weight: string;
  class: string;
};

type FontWeightSelectorProps = {
  fontName: string;
  weights: FontWeight[];
  onWeightChange: (weight: FontWeight) => void;
  currentWeight: string;
};

export default function FontWeightSelector({
  fontName,
  weights,
  onWeightChange,
  currentWeight,
}: FontWeightSelectorProps) {
  const [open, setOpen] = useState(false);
  const hasMultipleWeights = weights.length > 1;

  const setFontWeight = (weight: FontWeight) => {
    console.log("Aplicando peso:", weight.name, weight.weight);

    // Remover clases de peso anteriores
    document.body.classList.remove(
      "font-light",
      "font-normal",
      "font-medium",
      "font-bold",
      "italic"
    );

    // Aplicar nueva clase de peso
    if (weight.class === "italic") {
      document.body.classList.add("italic");
    } else if (weight.class !== "font-normal") {
      document.body.classList.add(weight.class);
    }

    onWeightChange(weight);
  };

  return (
    <div className="fixed bottom-6 right-15 z-50">
      <button
        onClick={() => hasMultipleWeights && setOpen((v) => !v)}
        className={`rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-xl font-bold border-2 border-white transition ${
          hasMultipleWeights
            ? "bg-[#4C583E] text-white hover:scale-110 cursor-pointer"
            : "bg-gray-400 text-gray-600 cursor-not-allowed"
        }`}
        title={
          hasMultipleWeights
            ? `Cambiar peso de ${fontName}`
            : `${fontName} solo tiene un peso disponible`
        }
        disabled={!hasMultipleWeights}
      >
        <FaBold />
      </button>
      {open && hasMultipleWeights && (
        <div className="absolute bottom-16 right-0 bg-[#4C583E] rounded-lg shadow-xl border border-white/20 p-3 flex flex-col gap-2 min-w-[150px]">
          <div className="text-white text-sm font-semibold mb-2 px-2">
            Peso de {fontName}
          </div>
          {weights.map((weight) => (
            <button
              key={weight.weight}
              onClick={() => {
                setFontWeight(weight);
                setOpen(false);
              }}
              className="text-left px-3 py-2 rounded hover:bg-white/10 transition font-semibold text-white flex items-center justify-between"
            >
              {weight.name}
              {currentWeight === weight.weight && <FaCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
