import { memo, useContext } from 'react'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { CartContext } from 'common/context/Cart'

import Container from './styles'

// eslint-disable-next-line no-unused-vars
function Product({ name, picture, id, value, unit }) {
  const { cart, setCart } = useContext(CartContext)

  function addProduct(newProduct) {
    const hasProduct = cart.some((item) => item.id === newProduct.id)

    if (!hasProduct) {
      newProduct.quantity = 1

      return setCart((previousCart) => [...previousCart, newProduct])
    }

    return setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === newProduct.id) {
          item.quantity += 1
        }

        return item
      })
    )
  }

  return (
    <Container>
      <div>
        <img src={`/assets/${picture}.png`} alt={`foto de ${name}`} />
        <p>
          {name} - R$ {value?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => addProduct({ name, picture, id, value })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Product)
