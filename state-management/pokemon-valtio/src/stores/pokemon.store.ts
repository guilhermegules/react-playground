import { proxy } from "valtio";
import { derive } from "valtio/utils";
import { Pokemon } from "../models/pokemon.model";

export const search = proxy({
  query: "",
});

const allPokemon = proxy({
  pokemons: [] as Pokemon[],
});

export const pokemon = derive({
  list: (get) => {
    const query = get(search).query.toLowerCase();
    return get(allPokemon)
      .pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});

fetch("/pokemon.json")
  .then((response) => response.json())
  .then((pokemons) => {
    allPokemon.pokemons = pokemons;
  });
