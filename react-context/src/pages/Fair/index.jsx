import { useContext } from 'react'

import Product from 'components/Product'
import { UserContext } from 'common/context/User'
import { Container, Header, List } from './styles'
import fair from './fair.json'
import NavBar from './NavBar'

function Fair() {
  const { name, value } = useContext(UserContext)

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {name} ! </h2>
          <h3> Saldo: {value} R$</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <List>
        <h2>Produtos:</h2>
        {fair.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </List>
    </Container>
  )
}

export default Fair
