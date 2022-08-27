import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import CustomProduct from "./components/Product/CustomProduct";
import Product from "./components/Product/Product";
import ProductDescription from "./components/Product/ProductDescription";
import ProductScore from "./components/Product/ProductScore";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="product/:id" element={<Product />}>
        <Route path="" element={<ProductDescription />} />
        <Route path="score" element={<ProductScore />} />
        <Route path="custom" element={<CustomProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
