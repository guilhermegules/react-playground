import { Button, Input, InputLabel, InputAdornment } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { UserContext } from 'common/context/User'
import { useContext } from 'react'
import { Container, Title, InputContainer } from './styles'

function Login() {
  const history = useHistory()
  const { name, setName, value, setValue } = useContext(UserContext)

  return (
    <Container>
      <Title>Insira o seu nome</Title>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={name.length < 2}
        onClick={() => history.push('/fair')}
      >
        Avançar
      </Button>
    </Container>
  )
}

export default Login
