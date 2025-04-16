import { useContext } from "react"
import { CartContext } from "../../context/cart"

export const CartItems = () => {

  const { cart, removeItem } = useContext(CartContext)

  return (
    <section className="my-4">
      {
        cart.items.map((item) => {
          const { product } = item
          return (
            <article
              key={item.id}
              className="mb-4 border-b border-white/50 py-2"
            >
              <div className="flex gap-4 mb-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain"
                  />
                <div>
                  <h3 className="text-lg font-bold">
                    {product.title}
                  </h3>
                  <p>
                    {product.price}$
                  </p>
                </div>
              </div>
              <footer className="flex justify-between items-center">
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded mt-2"
                  onClick={() => {
                    removeItem(item.id)
                  }}
                >
                  Remove
                </button>
                <div
                  className="text-lg font-bold"
                >
                  {
                    item.quantity
                  }
                </div>
                <div
                  className="text-lg font-bold"
                >
                  ${
                    (item.quantity * product.price).toFixed(2)
                  }
                </div>
              </footer>
            </article>
          )
        })
      }
    </section>
  )
}
