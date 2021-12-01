import { memo } from 'react'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useCartContext } from 'common/context/Cart'

import Container from './styles'

// eslint-disable-next-line no-unused-vars
function Product({ name, picture, id, value, unit }) {
  const { cart, addProduct, removeProduct } = useCartContext()

  const productOnCart = cart.find((item) => item.id === id)

  return (
    <Container>
      <div>
        <img src={`/assets/${picture}.png`} alt={`foto de ${name}`} />
        <p>
          {name} - R$ {value?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary" onClick={() => removeProduct(id)}>
          <RemoveIcon />
        </IconButton>
        {productOnCart?.quantity || 0}
        <IconButton
          color="primary"
          onClick={() => addProduct({ name, picture, id, value })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Product)
