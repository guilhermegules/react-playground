import { useState } from "react";

const ProductStateExercise = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const handleProduct = async (productType) => {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productType}`
    );
    const product = await response.json();
    setProduct(product);
    setLoading(false);
  };

  return (
    <div>
      <h2>Produtos</h2>

      <span>
        <button onClick={() => handleProduct("tablet")}>Tablet</button>
        <button onClick={() => handleProduct("smartphone")}>Smartphone</button>
        <button onClick={() => handleProduct("notebook")}>Notebook</button>
      </span>

      {loading && <p>Loading...</p>}

      {!loading && product && (
        <div>
          <p>{product.nome}</p>
          <p>Preço: R$ {Number(product.preco).toLocaleString("pt-BR")}</p>
          <p>{product.descricao}</p>
          {product.fotos.map((photo) => (
            <img key={photo.titulo} src={photo.src} alt={photo.titulo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductStateExercise;
