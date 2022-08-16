import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => {
    const localItem = localStorage.getItem("count");
    console.log("memo happened");
    return localItem;
  }, []);
  console.log(value);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        localStorage.setItem("count", count);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
