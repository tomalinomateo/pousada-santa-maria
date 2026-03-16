import { quartosList } from "./quartos-list";

function roomImagePath(folder: string, filename: string): string {
  return `/images/quartos/${encodeURIComponent(folder)}/${filename}`;
}

function folderToSlug(folder: string): string {
  return folder
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export type Quarto = {
  id: number;
  nome: string;
  capacidade: number;
  folder: string;
  slug: string;
  images: string[];
  imagem: string;
};

export const quartos: Quarto[] = quartosList.map((entry, index) => ({
  id: index + 1,
  nome: entry.nome,
  capacidade: entry.capacidade,
  folder: entry.folder,
  slug: folderToSlug(entry.folder),
  images: entry.images,
  imagem: roomImagePath(
    entry.folder,
    entry.coverImage ?? entry.images[0]
  ),
}));

export function getQuartoBySlug(slug: string): Quarto | undefined {
  return quartos.find((q) => q.slug === slug);
}

export function getQuartoImages(quarto: Quarto): string[] {
  return quarto.images.map((filename) =>
    roomImagePath(quarto.folder, filename)
  );
}
