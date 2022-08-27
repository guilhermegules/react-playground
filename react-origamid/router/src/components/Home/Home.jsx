import React from "react";
import { Link } from "react-router-dom";
import Head from "../Head/Head";

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Home description" />
      <h1>Home</h1>
      <Link to="product/notebook">Notebook</Link>{" "}
      <Link to="product/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
