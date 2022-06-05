import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <p>{product.nome}</p>
      <p>Preço: R$ {Number(product.preco).toLocaleString("pt-BR")}</p>
      <p>{product.descricao}</p>
      {product.fotos.map((photo) => (
        <img key={photo.titulo} src={photo.src} alt={photo.titulo} />
      ))}
    </div>
  );
};

export default Product;
