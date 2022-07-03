import React from "react";

const set1 = new Set();
const set2 = new Set();

const Product = () => {
  const function1 = () => {
    console.log("Test 1");
  };

  const function2 = React.useCallback(() => {
    console.log("Test 2");
  }, []);

  set1.add(function1);
  set2.add(function2);

  console.log("Set 1:", set1);
  console.log("Set 2:", set2);

  return (
    <div>
      <p onClick={function1}>Product 1</p>
      <p onClick={function2}>Product 2</p>
    </div>
  );
};

export default Product;
