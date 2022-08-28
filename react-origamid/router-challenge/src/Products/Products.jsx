import React from "react";

import "../animations/FadeLeft.css";
import styles from "./Products.module.css";

import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head/Head";

const Products = () => {
  const { request, data, loading } = useFetch();
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(id);
  }

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto");
  }, [request]);

  if (loading) return <div className="loading"></div>;

  if (!data) return null;

  return (
    <section className={`${styles.content} fade-left`}>
      <Head title="Listagem" />
      {data.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          <img
            src={item.fotos[0].src}
            alt={item.name}
            className={styles.image}
          />
          <h2>{item.nome}</h2>
        </div>
      ))}
    </section>
  );
};

export default Products;
