import create from "zustand";
import { Pokemon } from "../models/pokemon.model";

const searchAndSortPokemon = (pokemons: Pokemon[], search: string) =>
  pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 10)
    .sort((a, b) => a.name.localeCompare(b.name));

export const usePokemon = create<{
  pokemons: Pokemon[];
  allPokemon: Pokemon[];
  setAllPokemon: (pokemon: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
}>((set, get) => ({
  pokemons: [],
  allPokemon: [],
  setAllPokemon: (pokemons: Pokemon[]) =>
    set({
      allPokemon: pokemons,
      pokemons: searchAndSortPokemon(pokemons, get().search),
    }),
  search: "",
  setSearch: (search: string) =>
    set({ search, pokemons: searchAndSortPokemon(get().allPokemon, search) }),
}));

fetch("/pokemon.json")
  .then((response) => response.json())
  .then((pokemon) => usePokemon.getState().setAllPokemon(pokemon));
