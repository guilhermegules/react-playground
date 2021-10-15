import { useState } from 'react'
import { Button, Snackbar, InputLabel } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import { Container, Back, TotalsContainer, PaymentContainer } from './styles'

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  return (
    <Container>
      <Back />
      <h2>Carrinho</h2>
      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PaymentContainer>
      <TotalsContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalsContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true)
        }}
        color="primary"
        variant="contained"
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
