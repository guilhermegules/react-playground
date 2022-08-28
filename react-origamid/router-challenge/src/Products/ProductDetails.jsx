import React from "react";
import { useParams } from "react-router-dom";

import "../animations/FadeLeft.css";
import styles from "./ProductDetails.module.css";

import useFetch from "../hooks/useFetch";
import Head from "../components/Head/Head";

const ProductDetails = () => {
  const { request, data, loading } = useFetch();
  const params = useParams();

  const moneyFormatter = (value) => {
    if (!value) return "";

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      currency: "BRL",
    });

    return formatter.format(Number(value));
  };

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [request, params]);

  if (loading) return <div className="loading"></div>;

  if (!data) return null;

  return (
    <section className={`${styles.content} fade-left`}>
      <Head title={data.nome} />
      <div className={styles.imagesContainer}>
        {data.fotos.map((photo, index) => (
          <img
            key={photo.titulo}
            src={photo.src}
            alt={`${data.nome} ${index}`}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.infoContainer}>
        <h2>{data.nome}</h2>
        <p className={styles.price}>{moneyFormatter(data.preco)}</p>
        <p>{data.descricao}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
