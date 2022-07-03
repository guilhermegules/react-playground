import React from "react";

function slowOperation() {
  let number = 0;

  for (let i = 0; i < 100000000; i++) {
    number = i + i / 10;
  }

  return number;
}

const SlowOperation = () => {
  const [count, setCount] = React.useState(0);

  const value = React.useMemo(() => slowOperation(), []);

  const t1 = performance.now();

  console.log("Performance use memo", performance.now() - t1);

  const value2 = slowOperation();

  const t2 = performance.now();

  console.log("Performance without memo", performance.now() - t2);

  return (
    <div>
      <p>Value: {value}</p>
      <p>Value 2: {value2}</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default SlowOperation;
