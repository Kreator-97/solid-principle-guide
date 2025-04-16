import { createContext } from "react";

interface UIContextState {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export const UIContext = createContext<UIContextState>({} as UIContextState);
