import { createContext, useState } from 'react'

export const CartContext = createContext()

CartContext.displayName = 'Cart'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
