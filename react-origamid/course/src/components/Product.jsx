import React from "react";

function Product({ name, properties }) {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p>{name}</p>
      {properties.map((property) => (
        <ul>
          <li>{property}</li>
        </ul>
      ))}
    </div>
  );
}

export default Product;
