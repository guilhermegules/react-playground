import { usePokemon } from "../stores/pokemon.store";

const SearchBox = () => {
  const { search, setSearch } = usePokemon((state) => ({
    search: state.search,
    setSearch: state.setSearch,
  }));

  return (
    <input
      type="text"
      placeholder="Search"
      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};

export default SearchBox;
