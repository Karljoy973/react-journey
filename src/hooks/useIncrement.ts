import { useState } from "react";
export function useIncrement(initialValue: number) {
  const [state, setState] = useState(initialValue);
  return [
    state,
    () => setState((value) => value+1),
    () => setState((value) => value-1),
  ];
}

export type incrementHook = [number, () => void, () => void]
// ne pas oublier de typer parce que sinon typescript va raler 
