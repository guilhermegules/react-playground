import PokemonList from "./components/PokemonList";
import SearchBox from "./components/SearchBox";
import { PokemonProvider } from "./hooks/usePokemon";

function App() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
