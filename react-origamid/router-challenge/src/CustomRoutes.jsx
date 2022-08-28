import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import Contact from "./Contact/Contact";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path=":id" element={<ProductDetails />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default CustomRoutes;
