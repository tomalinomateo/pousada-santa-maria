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
  /** Id de la foto de portada dentro del grupo; si no se indica, se usa la primera */
  capaId?: string;
};

export const quartosList: QuartoEntry[] = [
  { nome: "Maresia Deluxe", grupo: "cuarto-1", capacidade: 2 },
  { nome: "Maresia", grupo: "cuarto-2", capacidade: 2 },
  { nome: "Plancton", grupo: "cuarto-3", capacidade: 4 },
  { nome: "Mar", grupo: "cuarto-4", capacidade: 3, capaId: "sm-33" },
  { nome: "Flamboyant", grupo: "cuarto-5", capacidade: 3, capaId: "sm-33" },
  { nome: "Cajueiro", grupo: "cuarto-6", capacidade: 3 },
  { nome: "Carnauba", grupo: "cuarto-7", capacidade: 4 },
  // Buriti se publica sin fotos: la galería queda vacía hasta que exista el
  // grupo "cuarto-8" en el manifest. El build avisa por consola mientras falte.
  { nome: "Buriti", grupo: "cuarto-8", capacidade: 2 },
];
