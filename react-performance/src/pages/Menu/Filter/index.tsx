import { memo } from "react";
import styles from "./Filter.module.scss";

const filters = [
  {
    label: "Pasta",
    id: 1,
  },
  {
    label: "Meat",
    id: 2,
  },
  {
    label: "Combos",
    id: 3,
  },
  {
    label: "Vegans",
    id: 4,
  },
];

type Option = (typeof filters)[0];

type FilterProps = {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
};

const Filter = memo(({ filter, setFilter }: FilterProps) => {
  const selectFilter = (option: Option) => {
    if (filter === option.id) {
      setFilter(null);
      return;
    }

    setFilter(option.id);
  };

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          key={option.id}
          className={`${styles.filter} ${
            option.id === filter ? styles.filterActive : ""
          }`}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
});

export default Filter;
