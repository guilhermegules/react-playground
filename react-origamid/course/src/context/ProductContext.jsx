import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <ProductContext.Provider value={{ products, clearProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
