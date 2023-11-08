import { useCallback, useEffect, useState } from "react";
import menu from "../../../data/menu.json";
import { Menu } from "../../../types/Dish";
import Item from "./Item";
import style from "./Items.module.scss";

type ItemsProps = {
  search: string;
  filter: number | null;
  orderBy: string;
};

const Items = ({ filter, orderBy, search }: ItemsProps) => {
  const [items, setItems] = useState(menu);

  const checkSearch = useCallback(
    (title: string) => {
      const searchRegex = new RegExp(search, "i");
      return searchRegex.test(title);
    },
    [search]
  );

  const checkFilter = useCallback(
    (id: number) => {
      if (filter !== null) {
        return filter === id;
      }

      return true;
    },
    [filter]
  );

  const orderMenuBy = useCallback(
    (newList: Menu) => {
      switch (orderBy) {
        case "portion":
          return newList.sort((a, b) => a.size - b.size);
        case "personQuantity":
          return newList.sort((a, b) => a.serving - b.serving);
        case "price":
          return newList.sort((a, b) => a.price - b.price);
        default:
          return newList;
      }
    },
    [orderBy]
  );

  useEffect(() => {
    const newList = menu.filter(
      (item) => checkSearch(item.title) && checkFilter(item.category.id)
    );
    setItems(orderMenuBy(newList));
  }, [search, filter, orderBy, checkSearch, checkFilter, orderMenuBy]);

  return (
    <div className={style.items}>
      {items.map((item) => (
        <Item dish={item} />
      ))}
    </div>
  );
};

export default Items;
