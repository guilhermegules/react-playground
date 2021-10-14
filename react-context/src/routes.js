
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cart from "pages/Cart";
import Fair from "pages/Fair";
import Login from "pages/Login";

function Router() {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
            name={name}
            setName={setName}
            value={value}
            setValue={setValue}
          />
        </Route>
        <Route path="/fair">
          <Fair />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;