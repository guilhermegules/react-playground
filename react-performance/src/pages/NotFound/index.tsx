import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
import themeStyles from "../../styles/Theme.module.scss";
import notFound from "../../assets/not-found.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${themeStyles.container}`}>
      <div className={styles.goBack}>
        <button onClick={() => navigate(-1)}>{"< Go back"}</button>
      </div>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
