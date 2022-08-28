import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomRoutes from "./CustomRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
