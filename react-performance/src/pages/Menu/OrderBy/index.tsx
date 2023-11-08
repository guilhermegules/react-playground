import { memo, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./OrderBy.module.scss";

const orderByOptions = [
  {
    name: "",
    value: "",
  },
  {
    name: "Porção",
    value: "portion",
  },
  {
    name: "Qtd. pessoas",
    value: "personQuantity",
  },
  {
    name: "Preço",
    value: "price",
  },
];

type OrderByProps = {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
};

const OrderBy = memo(({ orderBy, setOrderBy }: OrderByProps) => {
  const [open, setOpen] = useState(false);
  const orderName =
    orderBy && orderByOptions.find((option) => option.value === orderBy)?.name;

  return (
    <button
      className={`${styles.orderBy} ${
        orderBy === "" ? styles.orderByActive : ""
      }`}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{orderName || "Ordernar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={`${styles.orderByOptions} ${
          open ? styles.orderByOptionsActive : ""
        }`}
      >
        {orderByOptions.map((option) => (
          <div
            className={styles.orderByOption}
            key={option.value}
            onClick={() => setOrderBy(option.value)}
          >
            {option.value}
          </div>
        ))}
      </div>
    </button>
  );
});

export default OrderBy;
