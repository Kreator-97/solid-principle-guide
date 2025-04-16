import { FC, useContext } from "react"
// import { RiHeart3Fill } from "react-icons/ri"
// import { RiHeart3Line } from "react-icons/ri"
import { RiShoppingCart2Fill } from "react-icons/ri"

import { Book } from "../../interfaces/book"
import { CartContext } from "../../context/cart"

interface Props {
  book: Book
}

export const BookCard: FC<Props> = ({ book }) => {
  const { addItem, removeItem, cart } = useContext(CartContext)

  const isAdded = cart.items.some((item) => item.id === book.id)

  return (
    <article
      key={book.id}
      className="border p-4 rounded-lg shadow-md bg-zinc-700 flex flex-col justify-between"
    >
      <div>
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-auto aspect-[2/3] object-contain mb-2"
        />
        <h2
          className="text-lg font-bold"
        >
          {book.title}
        </h2>
        <p>
          {book.subtitle}
        </p>
        <p>
          {book.authors}
        </p>
      </div>

      <footer className="flex justify-between">
        <div></div>
        {/* <button
          className="bg-gray-800 text-white py-2 px-4 rounded mt-2 "
        >
          {
            isAdded ? <RiHeart3Fill /> : <RiHeart3Line />
          }
        </button> */}
        <div>
        <button
          className={
            `flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded mt-2 ${isAdded ? 'bg-red-500' : ''}`
          }
          onClick={() => {

            if( isAdded) {
              removeItem(book.id)
              return
            }

            addItem({
              id: book.id,
              product: {
                id: book.id,
                description: book.subtitle,
                title: book.title,
                price: Math.floor(Math.random() * 100),
                image: book.image,
              },
              quantity: 1,
            })
          }}
        >
          {
            isAdded ? 'Remove' : 'Add to cart'
          }
          <RiShoppingCart2Fill />
        </button>
        </div>
      </footer>
    </article>
  )
}
