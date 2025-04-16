import { useContext } from 'react'
import { BookGrid } from './components/books/book-grid'
import './global.css'
import { CartContext } from './context/cart'
import { FloatingCartStatus } from './components/ui/floating-cart-status'
import { CartDrawer } from './components/cart/cart-drawer'

function App() {
  const { cart } = useContext(CartContext)

  return (
    <main className='px-4 py-2'>
      <h2>
        {
          cart.items.length === 0
            ? 'Your cart is empty'
            : `You have ${cart.items.length} items in your cart`
        }
      </h2>

      <FloatingCartStatus />
      <CartDrawer />
      <BookGrid />
    </main>
  )
}

export default App
