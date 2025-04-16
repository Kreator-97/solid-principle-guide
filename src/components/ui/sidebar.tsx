import { FC, PropsWithChildren, useEffect, useState } from "react"

interface Props extends PropsWithChildren {
  isOpen?: boolean
}

export const Sidebar: FC<Props> = ({
  children,
  isOpen: initialIsOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  console.log('initialIsOpen', initialIsOpen)
  console.log('isOpen', isOpen)

  useEffect(() => {
    setIsOpen(initialIsOpen)
  }, [initialIsOpen])

  return (
    <aside
      className={
        `fixed top-0 right-0 w-[360px] h-screen bg-gray-800 text-white p-4 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`
      }
    >
      {
        children
      }
    </aside>
  )
}
