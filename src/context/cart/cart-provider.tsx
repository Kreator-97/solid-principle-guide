import { FC, PropsWithChildren, useState } from "react"

import { CartContext } from "./cart-context"
import { CartItem } from "../../interfaces/cart-item"
import { Cart } from "../../interfaces/cart"

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  })

  const addItem = (item: CartItem) => {
    const newItems = [...cart.items, item]
    const newTotalQuantity = cart.totalQuantity + 1
    const newTotalPrice = newItems.reduce((acc, curr) => acc + curr.product.price, 0)

    setCart({
      items: newItems,
      totalPrice: newTotalPrice,
      totalQuantity: newTotalQuantity,
    })
  }

  const removeItem = (itemId: string) => {
    const items = cart.items.filter(item => item.product.id !== itemId)
    setCart(
      {
        ...cart,
        items,
        totalQuantity: items.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: items.reduce((acc, curr) => acc + curr.product.price, 0),
      }
    )
  }

  const clearCart = () => {
    setCart({
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
    })
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
