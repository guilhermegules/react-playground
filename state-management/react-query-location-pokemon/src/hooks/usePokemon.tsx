import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
  useMemo,
} from "react";
import { Pokemon } from "../models/pokemon.model";

type PokemonSource = {
  pokemons: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
};

type PokemonState = {
  search: string;
};

type PokemonAction = { type: PokemonActionType.SET_SEARCH; payload: string };

enum PokemonActionType {
  SET_SEARCH = "SET_SEARCH",
}

const pokemonReducer = (state: PokemonState, action: PokemonAction) => {
  switch (action.type) {
    case PokemonActionType.SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return { ...state };
  }
};

export function usePokemonSource(): PokemonSource {
  const { data: pokemons } = useQuery<Pokemon[]>(
    ["pokemon"],
    () => fetch("/pokemon.json").then((response) => response.json()),
    {
      initialData: [],
    }
  );

  const [{ search }, dispatch] = useReducer(pokemonReducer, {
    search: "",
  });

  const setSearch = useCallback((search: string) => {
    dispatch({ payload: search, type: PokemonActionType.SET_SEARCH });
  }, []);

  const filteredPokemons = useMemo(
    () =>
      pokemons
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 20),
    [pokemons, search]
  );

  const sortedPokemon = useMemo(
    () => [...filteredPokemons].sort((a, b) => a.name.localeCompare(b.name)),
    [filteredPokemons]
  );

  return { pokemons: sortedPokemon, search, setSearch };
}

export const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource>
>({} as unknown as ReturnType<typeof usePokemonSource>);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
};

export function usePokemon(): PokemonSource {
  return useContext(PokemonContext);
}
