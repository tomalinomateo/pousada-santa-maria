/**
 * Fuente única de verdad para los cuartos.
 *
 * "nome" es el nombre que se muestra en todo el sitio; "grupo" es la clave
 * dentro de public/img/manifest.json de donde salen las fotos (pueden diferir
 * si más adelante se renombran las carpetas).
 */
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
   * Ids de fotos del grupo que van primero en la galería, en este orden. La
   * primera es además la portada que se ve en las grillas y los carruseles.
   * El resto de las fotos sigue el orden del manifest.
   */
  ordemIds?: string[];
};

export const quartosList: QuartoEntry[] = [
  {
    nome: "Maresia Deluxe",
    grupo: "cuarto-1",
    capacidade: 2,
    ordemIds: ["img-8764"],
  },
  {
    nome: "Maresia",
    grupo: "cuarto-2",
    capacidade: 2,
    ordemIds: ["cuarto-2", "chatgpt-image-2-jul-2026-20-43-43"],
  },
  { nome: "Plancton", grupo: "cuarto-3", capacidade: 4 },
  { nome: "Mar", grupo: "cuarto-4", capacidade: 3, ordemIds: ["sm-33"] },
  { nome: "Flamboyant", grupo: "cuarto-5", capacidade: 3, ordemIds: ["sm-5"] },
  { nome: "Cajueiro", grupo: "cuarto-6", capacidade: 3 },
  { nome: "Carnauba", grupo: "cuarto-7", capacidade: 4 },
  { nome: "Buriti", grupo: "cuarto-8", capacidade: 2 },
];
