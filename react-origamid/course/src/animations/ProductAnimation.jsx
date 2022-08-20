import React from "react";
import Product from "./Product";

const ProductAnimation = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}> Activate </button>
      {active && <Product />}
    </div>
  );
};

export default ProductAnimation;
