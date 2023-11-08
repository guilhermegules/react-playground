import styles from "./Menu.module.scss";
import { useState } from "react";
import OrderBy from "./OrderBy";
import Filter from "./Filter";
import Search from "./Search";
import Items from "./Items";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [orderBy, setOrderBy] = useState("");

  return (
    <section>
      <h3>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menuFilter}>
        <Filter filter={filter} setFilter={setFilter} />
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
      <Items search={search} filter={filter} orderBy={orderBy} />
    </section>
  );
};

export default Menu;
