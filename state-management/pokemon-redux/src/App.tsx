import { Provider } from "react-redux";

import SearchBox from "./components/SearchBox";
import PokemonList from "./components/PokemonList";
import { store } from "./stores/pokemon.store";

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <PokemonList />
      </div>
    </Provider>
  );
}

export default App;
