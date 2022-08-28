import React from "react";

import image from "../assets/contact.jpg";

import "../animations/FadeLeft.css";
import styles from "./Contact.module.css";
import Head from "../components/Head/Head";

const Contact = () => {
  return (
    <section className={`${styles.content} fade-left`}>
      <Head title="Contato" />
      <img className={styles.image} src={image} alt="" />
      <div className={styles.infoContainer}>
        <h2>Entre em contato.</h2>
        <ul className={styles.infoList}>
          <li className={styles.infoListItem}>guilhermegules@gmail.com</li>
          <li className={styles.infoListItem}>99999-9999</li>
          <li className={styles.infoListItem}>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
