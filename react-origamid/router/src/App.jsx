import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import CustomRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <CustomRoutes />
    </BrowserRouter>
  );
};

export default App;
