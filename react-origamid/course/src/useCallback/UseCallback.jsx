import React from "react";
import Product from "./Product";

const UseCallback = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <Product />
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default UseCallback;
