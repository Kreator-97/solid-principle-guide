import { FC, PropsWithChildren, useState } from "react"

import { CartContext } from "./cart-context"
import { CartItem } from "../../interfaces/cart-item"
import { Cart, CartOperation } from "../../classes/cart"

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(new Cart())

  const addItem = (item: CartItem) => {
    setCart(
      CartOperation.addItem(item, cart)
    )
  }

  const removeItem = (itemId: string) => {
    setCart(
      CartOperation.removeItem(itemId, cart)
    )
  }

  const clearCart = () => {
    setCart(
      CartOperation.clearCart(cart)
    )  
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {
        children
      }
    </CartContext.Provider>
  )
}
