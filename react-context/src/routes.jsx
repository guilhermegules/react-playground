import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cart from 'pages/Cart'
import Fair from 'pages/Fair'
import Login from 'pages/Login'
import { UserProvider } from 'common/context/User'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/fair">
            <Fair />
          </Route>
        </UserProvider>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
