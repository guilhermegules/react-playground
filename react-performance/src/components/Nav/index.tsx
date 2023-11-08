import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import logo from "../../assets/logo.svg";

const routes = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "about", label: "About" },
];

const Nav = () => {
  return (
    <nav className={styles.menu}>
      <img src={logo} alt="" />
      <ul className={styles.menuList}>
        {routes.map((route) => (
          <li key={route.to} className={styles.menuLink}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
