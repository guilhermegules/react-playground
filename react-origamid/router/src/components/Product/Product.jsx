import React from "react";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CustomProduct from "./CustomProduct";
import ProductDescription from "./ProductDescription";
import ProductScore from "./ProductScore";

const Product = () => {
  const params = useParams();
  const location = useLocation();

  console.log("location:", location);

  return (
    <div>
      <h1>Product: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Description
        </NavLink>{" "}
        <NavLink to="score">Score</NavLink>{" "}
        <NavLink to="custom">Custom</NavLink>{" "}
      </nav>
      <Outlet />
    </div>
  );
};

export default Product;
