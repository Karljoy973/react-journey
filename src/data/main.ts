import type { NotePrio, NoteCategory } from "../types";

export const prio: { value: NotePrio; label: NotePrio }[] = [
  { value: "Faible", label: "Faible" },
  { value: "Médium", label: "Médium" },
  { value: "Haute", label: "Haute" },
];
export const categorie: { value: NoteCategory; label: NoteCategory }[] = [
  { value: "Travail", label: "Travail" },
  { value: "Personnel", label: "Personnel" },
  { value: "Projets", label: "Projets" },
];
