import React from "react";

const HeaderMemo = () => {
  console.log("render");
  return <header>HeaderMemo</header>;
};

export default React.memo(HeaderMemo);
