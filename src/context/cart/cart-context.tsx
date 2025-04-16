import { createContext } from "react";
import { Cart } from "../../interfaces/cart";
import { CartItem } from "../../interfaces/cart-item";

interface CartContextState {
  cart: Cart

  addItem(item: CartItem): void
  removeItem(itemId: string): void
  clearCart(): void
}

export const CartContext = createContext<CartContextState>({} as CartContextState)
