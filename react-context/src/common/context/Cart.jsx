import { createContext, useContext, useState } from 'react'

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

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext)

  function changeQuantity(id, isAdd = true) {
    return cart.map((item) => {
      if (item.id === id) {
        isAdd ? (item.quantity += 1) : (item.quantity -= 1)
      }

      return item
    })
  }

  function addProduct(newProduct) {
    const hasProduct = cart.some((item) => item.id === newProduct.id)

    if (!hasProduct) {
      newProduct.quantity = 1

      return setCart((previousCart) => [...previousCart, newProduct])
    }

    return setCart(changeQuantity(newProduct.id))
  }

  function removeProduct(id) {
    const product = cart.find((item) => item.id === id)

    if (!product) return null

    const isLast = product.quantity === 1

    if (isLast) {
      return setCart((previousCart) =>
        previousCart.filter((item) => item.id !== id)
      )
    }

    return setCart(changeQuantity(id, false))
  }

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
  }
}
