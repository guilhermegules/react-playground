import PokemonList from "./components/PokemonList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="mx-auto max-w-3xl">
      <SearchBox />
      <PokemonList />
    </div>
  );
}

export default App;
