import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";
import { Pokemon } from "../models/pokemon.model";

export function usePokemonSource(): {
  pokemons: Pokemon[];
} {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  return { pokemons };
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

export function usePokemon(): { pokemons: Pokemon[] } {
  return useContext(PokemonContext);
}
