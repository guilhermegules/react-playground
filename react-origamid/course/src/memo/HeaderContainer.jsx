import React from "react";
import HeaderMemo from "./HeaderMemo";

const HeaderContainer = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <HeaderMemo />

      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HeaderContainer;
