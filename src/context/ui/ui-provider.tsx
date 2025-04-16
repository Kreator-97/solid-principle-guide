import { FC, PropsWithChildren, useState } from "react"
import { UIContext } from "./ui-context"

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <UIContext.Provider
      value={{
        isCartOpen,
        toggleCart,
      }}
    >
      {
        children
      }
    </UIContext.Provider>
  )
}
