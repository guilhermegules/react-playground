import { useContext, useMemo, useState } from 'react'
import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import { useCartContext } from 'common/context/Cart'
import Product from 'components/Product'
import { useHistory } from 'react-router-dom'
import { usePaymentContext } from 'common/context/Payment'
import { UserContext } from 'common/context/User'
import { Container, Back, TotalsContainer, PaymentContainer } from './styles'

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const { cart, total, buy } = useCartContext()
  const { paymentType, paymentTypes, paymentTypeChange } = usePaymentContext()
  const { value = 0 } = useContext(UserContext)
  const history = useHistory()

  const totalPurchase = useMemo(() => value - total, [value, total])

  return (
    <Container>
      <Back onClick={() => history.goBack()} />

      <h2>Carrinho</h2>

      {cart.map((product) => (
        <Product key={product.id} {...product} />
      ))}

      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={paymentType.id}
          onChange={(event) => paymentTypeChange(event.target.value)}
        >
          {paymentTypes.map((payment) => (
            <MenuItem value={payment.id} key={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
      </PaymentContainer>
      <TotalsContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {total.toFixed(2)} </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(value).toFixed(2)} </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {totalPurchase.toFixed(2)} </span>
        </div>
      </TotalsContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true)
          buy()
        }}
        color="primary"
        variant="contained"
        disabled={totalPurchase < 0 || !cart.length}
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Cart
