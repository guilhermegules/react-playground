import { createContext, useContext, useEffect, useState } from 'react'
import { usePaymentContext } from './Payment'
import { UserContext } from './User'

export const CartContext = createContext()

CartContext.displayName = 'Cart'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider
      value={{ cart, setCart, quantity, setQuantity, total, setTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const { cart, setCart, quantity, setQuantity, total, setTotal } =
    useContext(CartContext)

  const { paymentType } = usePaymentContext()

  const { setValue } = useContext(UserContext)

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

  function buy() {
    setCart([])
    setValue((value) => value - total)
  }

  useEffect(() => {
    const { newTotal, newQuantity } = cart.reduce(
      (count, product) => ({
        newQuantity: count.newQuantity + product.quantity,
        newTotal: count.newTotal + product.value * product.quantity,
      }),
      { newQuantity: 0, newTotal: 0 }
    )
    setQuantity(newQuantity)
    setTotal(newTotal * paymentType.taxes)
  }, [cart, setQuantity, setTotal, paymentType])

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
    setQuantity,
    quantity,
    total,
    buy,
  }
}
