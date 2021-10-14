import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <IconButton>
        <Badge
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}