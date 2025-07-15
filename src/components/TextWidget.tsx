import type { ReactNode } from "react";

export function TextWidget({ children }: TextWidgetProps) {
  return <div> {children} </div>;
}

type TextWidgetProps = {
  children: ReactNode;
};

// doit pouvoir accepter des enfants
// est ce que je dois créer une widget bar
// et rajouter des props pour gérer les couleurs ?
