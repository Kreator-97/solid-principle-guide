import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { CartProvider } from './context/cart/cart-provider.tsx'
import { UIProvider } from './context/ui/ui-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UIProvider>
  </StrictMode>,
)
