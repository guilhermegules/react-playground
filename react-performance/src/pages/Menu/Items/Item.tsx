import { useNavigate } from "react-router-dom";
import { Dish } from "../../../types/Dish";
import DishTag from "../../../components/DishTag";
import { memo } from "react";
import styles from "./Item.module.scss";

type ItemProps = {
  dish: Dish;
};

const Item = memo(({ dish }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${dish.id}`)}>
      <div className={styles.itemImage}>
        <img src={dish.photo} alt={dish.title} />
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.itemTitle}>
          <h2>{dish.title}</h2>
          <p>{dish.description}</p>
        </div>
        <DishTag dish={dish} />
      </div>
    </div>
  );
});

export default Item;
