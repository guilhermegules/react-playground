import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cart from 'pages/Cart'
import Fair from 'pages/Fair'
import Login from 'pages/Login'
import { UserProvider } from 'common/context/User'
import { CartProvider } from 'common/context/Cart'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CartProvider>
            <Route path="/fair">
              <Fair />
            </Route>
          </CartProvider>
        </UserProvider>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
