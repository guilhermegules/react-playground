import React from "react";
import { ProductContext } from "./ProductContext";

const ProductsContextExample = () => {
  const { products, clearProducts } = React.useContext(ProductContext);

  return (
    <div>
      <button onClick={clearProducts}>Remove all products</button>

      {products.length ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Without products</p>
      )}
    </div>
  );
};

export default ProductsContextExample;
