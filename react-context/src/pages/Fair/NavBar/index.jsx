import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { useHistory } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/logo.svg'
import { useCartContext } from 'common/context/Cart'
import Nav from './styles'

export default function NavBar() {
  const { quantity } = useCartContext()
  const history = useHistory()

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantity === 0}
        onClick={() => history.push('/cart')}
      >
        <Badge color="primary" badgeContent={quantity}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}
