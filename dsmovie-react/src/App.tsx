import { BrowserRouter } from "react-router-dom";

import NavBar from "components/NavBar";
import AppRoutes from "routes";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
