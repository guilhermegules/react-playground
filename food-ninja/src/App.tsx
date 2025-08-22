import { Outlet } from "react-router";
import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
