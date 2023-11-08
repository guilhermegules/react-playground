import { Outlet } from "react-router-dom";
import styles from "./DefaultPage.module.scss";
import themeStyles from "../../styles/Theme.module.scss";

const DefaultPage = () => {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerText}>A casa do código e da massa</p>
      </header>
      <div className={themeStyles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultPage;
