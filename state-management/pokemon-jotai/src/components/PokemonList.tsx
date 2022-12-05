import { useAtomValue } from "jotai";

import { Pokemon } from "../models/pokemon.model";
import PokemonCard from "./PokemonCard";
import { sortedPokemonAtom } from "../stores/pokemon.store";

const PokemonList = () => {
  const pokemons = useAtomValue(sortedPokemonAtom);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon as Pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
