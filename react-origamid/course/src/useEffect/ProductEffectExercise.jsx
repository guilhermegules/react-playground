// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
import React from "react";
import Product from "./Product";

const ProductEffectExercise = () => {
  const [product, setProduct] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleProduct = async (productType) => {
    setLoading(true);
    localStorage.setItem("product", productType);
    const product = await requestHandler(productType);
    setProduct(product);
    setLoading(false);
  };

  const requestHandler = async (productType) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productType}`
    );
    const product = await response.json();

    return product;
  };

  React.useEffect(() => {
    const productType = localStorage.getItem("product");

    if (!productType) return;

    requestHandler(productType).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div>
      <h2>Produtos</h2>

      <span>
        <button onClick={() => handleProduct("tablet")}>Tablet</button>
        <button onClick={() => handleProduct("smartphone")}>Smartphone</button>
        <button onClick={() => handleProduct("notebook")}>Notebook</button>
      </span>

      {loading && <p>Loading...</p>}

      {!loading && product && <Product product={product} />}
    </div>
  );
};

export default ProductEffectExercise;
