import logo from "../../assets/logo.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="" />
    </footer>
  );
};

export default Footer;
