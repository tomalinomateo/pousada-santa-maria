/**
 * Fuente única de verdad para los cuartos.
 *
 * "nome" es el nombre que se muestra en todo el sitio; "grupo" es la clave
 * dentro de public/img/manifest.json de donde salen las fotos (pueden diferir
 * si más adelante se renombran las carpetas).
 */
import type { OrdemGaleria } from "./galeria-manifest";

export type QuartoEntry = {
  nome: string;
  /** Clave del grupo en public/img/manifest.json */
  grupo: string;
  /**
   * Capacidad en personas. Opcional: si falta, el sitio no muestra el dato en
   * lugar de inventarlo. Falta completarla para todos los cuartos nuevos.
   */
  capacidade?: number;
  /**
   * Orden manual de la galería: ids fijados al principio y al final. El primero
   * de `inicio` es además la portada que se ve en las grillas y los carruseles;
   * lo que no se nombra queda en el medio, en el orden del manifest.
   */
  ordem?: OrdemGaleria;
};

export const quartosList: QuartoEntry[] = [
  {
    nome: "Maresia Deluxe",
    grupo: "cuarto-1",
    capacidade: 2,
    ordem: { inicio: ["img-8764"] },
  },
  {
    nome: "Maresia",
    grupo: "cuarto-2",
    capacidade: 2,
    ordem: {
      inicio: [
        "cuarto-2",
        "chatgpt-image-2-jul-2026-20-43-43",
        "santamaria-165",
        "439089691",
      ],
    },
  },
  { nome: "Plancton", grupo: "cuarto-3", capacidade: 4 },
  {
    nome: "Mar",
    grupo: "cuarto-4",
    capacidade: 3,
    ordem: {
      inicio: ["santamaria-9", "sm-10", "sm-33"],
      fim: ["2b1e49f4-ab5e-4745-8e84-4e7d9f94472c"],
    },
  },
  {
    nome: "Flamboyant",
    grupo: "cuarto-5",
    capacidade: 3,
    ordem: { inicio: ["sm-5"] },
  },
  { nome: "Cajueiro", grupo: "cuarto-6", capacidade: 3 },
  {
    nome: "Carnauba",
    grupo: "cuarto-7",
    capacidade: 4,
    ordem: { inicio: ["680872061"] },
  },
  {
    nome: "Buriti",
    grupo: "cuarto-8",
    capacidade: 2,
    ordem: { inicio: ["santamaria-89"] },
  },
];
