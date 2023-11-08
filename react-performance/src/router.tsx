import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Menu = lazy(() => import("./pages/Menu"));
const DefaultPage = lazy(() => import("./components/DefaultPage"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dish = lazy(() => import("./pages/Dish"));
const About = lazy(() => import("./pages/About"));

const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <Nav />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<Home />}></Route>
              <Route path="menu" element={<Menu />}></Route>
              <Route path="about" element={<About />}></Route>
            </Route>
            <Route path="dish/:id/*" element={<Dish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
};

export default AppRouter;
