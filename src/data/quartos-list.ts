/**
 * Single source of truth for room names and image folders.
 * "nome" is the display name used across the app; "folder" is the images/quartos
 * subfolder name (they can differ if you rename folders later).
 */
export type QuartoEntry = {
  nome: string;
  folder: string;
  capacidade: number;
  images: string[];
  /** Cover image for home section; if not set, first of images is used */
  coverImage?: string;
};

export const quartosList: QuartoEntry[] = [
  {
    nome: "Villa de frente para o mar",
    folder: "villa de frente para o mar",
    capacidade: 4,
    coverImage: "villa-de-frente-para-o-mar-4.jpg",
    images: [
      "villa-de-frente-para-o-mar-1.jpg",
      "villa-de-frente-para-o-mar-2.jpg",
      "villa-de-frente-para-o-mar-3.jpg",
      "villa-de-frente-para-o-mar-4.jpg",
      "villa-de-frente-para-o-mar-5.jpg",
      "villa-de-frente-para-o-mar-6.jpg",
    ],
  },
  {
    nome: "Quarto duplo com vista do mar",
    folder: "quarto duplo com vista do mar",
    capacidade: 2,
    coverImage: "quarto-duplo-com-vista-do-mar-6.jpg",
    images: [
      "quarto-duplo-com-vista-do-mar-1.jpg",
      "quarto-duplo-com-vista-do-mar-2.jpg",
      "quarto-duplo-com-vista-do-mar-3.jpg",
      "quarto-duplo-com-vista-do-mar-4.jpg",
      "quarto-duplo-com-vista-do-mar-5.jpg",
      "quarto-duplo-com-vista-do-mar-6.jpg",
    ],
  },
  {
    nome: "Bangalô",
    folder: "bangalô",
    capacidade: 4,
    coverImage: "bangalo-9.jpg",
    images: [
      "bangalo-1.jpg",
      "bangalo-2.jpg",
      "bangalo-3.jpg",
      "bangalo-4.jpg",
      "bangalo-5.jpg",
      "bangalo-6.jpg",
      "bangalo-7.jpg",
      "bangalo-8.jpg",
      "bangalo-9.jpg",
      "bangalo-10.jpg",
      "bangalo-11.jpg",
      "bangalo-12.jpg",
    ],
  },
  {
    nome: "Villa com vista do jardim",
    folder: "villa com vista do jardim",
    capacidade: 4,
    images: [
      "villa-com-vista-do-jardim-1.jpg",
      "villa-com-vista-do-jardim-2.jpg",
      "villa-com-vista-do-jardim-3.jpg",
      "villa-com-vista-do-jardim-4.jpg",
      "villa-com-vista-do-jardim-5.jpg",
    ],
  },
  {
    nome: "Quarto quádruplo standard",
    folder: "quarto quádruplo standard",
    capacidade: 4,
    coverImage: "quarto-quadruplo-standard-5.jpg",
    images: [
      "quarto-quadruplo-standard-1.jpg",
      "quarto-quadruplo-standard-2.jpg",
      "quarto-quadruplo-standard-3.jpg",
      "quarto-quadruplo-standard-4.jpg",
      "quarto-quadruplo-standard-5.jpg",
      "quarto-quadruplo-standard-6.jpg",
      "quarto-quadruplo-standard-7.jpg",
      "quarto-quadruplo-standard-8.jpg",
      "quarto-quadruplo-standard-9.jpg",
      "quarto-quadruplo-standard-10.jpg",
      "quarto-quadruplo-standard-11.jpg",
      "quarto-quadruplo-standard-12.jpg",
      "quarto-quadruplo-standard-13.jpg",
      "quarto-quadruplo-standard-14.jpg",
      "quarto-quadruplo-standard-15.jpg",
      "quarto-quadruplo-standard-16.jpg",
      "quarto-quadruplo-standard-17.jpg",
      "quarto-quadruplo-standard-18.jpg",
      "quarto-quadruplo-standard-19.jpg",
      "quarto-quadruplo-standard-20.jpg",
      "quarto-quadruplo-standard-21.jpg",
      "quarto-quadruplo-standard-22.jpg",
      "quarto-quadruplo-standard-23.jpg",
      "quarto-quadruplo-standard-24.jpg",
      "quarto-quadruplo-standard-25.jpg",
    ],
  },
  {
    nome: "Quarto duplo standard",
    folder: "quarto duplo standard",
    capacidade: 2,
    coverImage: "quarto-duplo-standard-2.jpeg",
    images: ["quarto-duplo-standard-1.jpg", "quarto-duplo-standard-2.jpeg"],
  },
];
