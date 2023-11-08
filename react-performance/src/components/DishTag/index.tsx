import { Dish } from "../../types/Dish";
import styles from "./DishTag.module.scss";

type DishTagProps = {
  dish: Dish;
};

const DishTag = ({ dish }: DishTagProps) => {
  return (
    <div>
      <div
        className={`${styles.tagsType} ${styles[`tags${dish.category.label}`]}`}
      >
        {dish.category.label}
      </div>
      <div className={styles.tagsPortion}>{dish.size}g</div>
      <div className={styles.tagsPersonQuantity}>
        {dish.serving === 1 ? "1 person" : `${dish.serving} people`}
      </div>
      <div className={styles.tagsValue}>R$ {dish.price.toFixed(2)}</div>
    </div>
  );
};

export default DishTag;
