import "./App.css";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./hooks/usePokemon";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
