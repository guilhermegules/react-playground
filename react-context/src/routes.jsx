import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cart from 'pages/Cart'
import Fair from 'pages/Fair'
import Login from 'pages/Login'
import { UserProvider } from 'common/context/User'
import { CartProvider } from 'common/context/Cart'
import { PaymentProvider } from 'common/context/Payment'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CartProvider>
            <PaymentProvider>
              <Route path="/fair">
                <Fair />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </PaymentProvider>
          </CartProvider>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
