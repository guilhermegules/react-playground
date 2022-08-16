import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    { name: "Notebook", properties: ["16gb ram", "512gb"] },
    { name: "Smartphone", properties: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      <h1>Produtos</h1>
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </section>
  );
}

export default Products;
