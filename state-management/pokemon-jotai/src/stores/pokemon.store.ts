import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { Pokemon } from "../models/pokemon.model";

export const searchAtom = atom("");

export const [allPokemon] = atomsWithQuery<Pokemon[]>(() => ({
  queryKey: ["pokemon"],
  queryFn: () => fetch("/pokemon.json").then((response) => response.json()),
}));

export const pokemonAtom = atom((get) => {
  const search = get(searchAtom).toLowerCase();
  const allPokemonAtom = get(allPokemon);
  return allPokemonAtom.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search)
  );
});

export const sortedPokemonAtom = atom((get) => {
  const pokemon = get(pokemonAtom);
  return pokemon
    .slice(0, 10)
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
});
