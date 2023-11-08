import { memo, useMemo } from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Search.module.scss";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = memo(({ search, setSearch }: SearchProps) => {
  const icon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {icon}
    </div>
  );
});

export default Search;
