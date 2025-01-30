import { Button } from "@material-tailwind/react";

// Déclaration d'un composant personnalisé qui accepte ButtonProps
export function PrimaryButton() {
  return (
    <Button color="blue" size="lg" onClick={() => console.log("clicked")}>
      Blue Button
    </Button>
  );
}
