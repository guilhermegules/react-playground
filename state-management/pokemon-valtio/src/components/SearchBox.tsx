import { useSnapshot } from "valtio";
import { search } from "../stores/pokemon.store";

const SearchBox = () => {
  const snap = useSnapshot(search);

  return (
    <input
      type="text"
      placeholder="Search"
      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      value={snap.query}
      onChange={(event) => {
        search.query = event.target.value;
      }}
    />
  );
};

export default SearchBox;
