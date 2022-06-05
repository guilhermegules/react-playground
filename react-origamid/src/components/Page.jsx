import React from "react";

import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

function Page() {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/products") {
    Component = Products;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}

export default Page;
