import { useContext } from "react"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { CartContext } from "../../context/cart"
import { UIContext } from "../../context/ui"


export const FloatingCartStatus = () => {

  const { cart } = useContext(CartContext)
  const { toggleCart } = useContext(UIContext)

  return (
    <div
      className="fixed bottom-0 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg m-4 flex flex-col items-center w-[112px] hover:cursor-pointer hover:bg-blue-500 transition-colors"
      onClick={() => {
        toggleCart()
      }}
    >
      <RiShoppingCart2Fill
        className="text-3xl mb-2"
      />
      <strong className="text-2xl">
        {
          cart.items.length
        }
      </strong>
      <span>Items</span>
    </div>
  )
}
