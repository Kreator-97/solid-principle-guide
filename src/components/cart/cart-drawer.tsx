import { useContext } from "react"
import { RiCloseLargeFill } from "react-icons/ri"

import { Sidebar } from "../ui/sidebar"
import { UIContext } from "../../context/ui"
import { CartContext } from "../../context/cart"
import { CartItems } from "./cart-items"
import { Shipping } from "../../classes/shipping"

export const CartDrawer = () => {
  const { cart } = useContext(CartContext)
  const { isCartOpen, toggleCart } = useContext(UIContext)

  return (
    <Sidebar
      isOpen={isCartOpen}
    >
      <header
        className="flex gap-4 mb-4"
      >
        <RiCloseLargeFill
          className="text-3xl text-white cursor-pointer"
          onClick={() => toggleCart()}
        />
        <h2 className="text-2xl mb-4">Your cart</h2>
      </header>
      {
        cart.items.length === 0
          ? (
            <p>
              Your cart is empty
            </p>
          )
          : (
            <p>
              You have {cart.items.length} items in your cart
            </p>
          )
      }

      <CartItems />

      <footer
        className="absolute bottom-0 left-0 right-0 bg-slate-950 p-4 w-full"
      >
        <div
          className="flex justify-between items-center"
        >
          <h3 className="text-xl font-bold">
            Total:
          </h3>
          <h3 className="text-xl font-bold">
            ${
              cart.totalPrice.toFixed(2)
            }
          </h3>
        </div>
        <div className="flex">
          <h4 className="mr-1">Shipping: </h4>
          <p>
            {/* TODO: Add shipping cost */}
            ${new Shipping().calculateShipping(cart.totalPrice)}
          </p>
        </div>
      </footer>
    </Sidebar>
  )
}
