import { useNavigate } from "react-router-dom";
import menu from "../../data/menu.json";
import { Dish } from "../../types/Dish";
import ourHouse from "../../assets/our-house.png";
import styles from "./Home.module.scss";
import themeStyles from "../../styles/Theme.module.scss";

const Home = () => {
  const recommendedDishes = [...menu]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function detailsRedirect(dish: Dish) {
    navigate(`dish/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <section>
      <h3 className={themeStyles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommended}>
        {recommendedDishes.map((dish) => (
          <div key={dish.id}>
            <div className={styles.recommendedItemImage}>
              <img src={dish.photo} alt={dish.title} />
            </div>
            <button
              className={styles.recommendedItemButton}
              onClick={() => detailsRedirect(dish)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.title}> Nossa casa </h3>
      <div className={styles.ourHouse}>
        <img src={ourHouse} alt="Casa do aluroni" />
        <div className={styles.ourHouseAddress}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Home;
