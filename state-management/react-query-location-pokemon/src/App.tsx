import PokemonList from "./components/PokemonList";
import SearchBox from "./components/SearchBox";
import { PokemonProvider } from "./hooks/usePokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import PokemonDetails from "./components/PokemonDetails";

const queryClient = new QueryClient();
const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <PokemonList />
      </>
    ),
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Router location={location} routes={routes}>
          <div className="mx-auto max-w-3xl">
            <Outlet />
          </div>
        </Router>
      </PokemonProvider>
    </QueryClientProvider>
  );
}

export default App;
