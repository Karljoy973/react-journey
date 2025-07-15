import "./assets/main.css";
import { lazy, Suspense, createElement } from "react";

export default function App() {
  const Rating = lazy(() => import("./components/Rating.tsx"));

  return (
    <>
      <Suspense
        fallback={createElement(
          "div",
          { className: "rating-container" },
          "Loading...",
        )}
      >
        <Rating
          color="red"
          title="Que penses-tu de ton job ?"
          feedbackMessages={[
            "Je ne savais pas que je travaillais à cet endroit",
            "j'ai aimé la machine à café",
            "je n'ai jamais vu mes collègues",
            "la cantine fait de bons petits plats",
            "On nous offre des goodies sympas",
            "J'adore !",
            "Je veux y rester toute ma vie ♥",
          ]}
        />
      </Suspense>
    </>
  );
}
