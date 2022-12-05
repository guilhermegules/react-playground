import { useSnapshot } from "valtio";
import { Pokemon } from "../models/pokemon.model";

import { pokemon } from "../stores/pokemon.store";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const snap = useSnapshot(pokemon);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {snap.list.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon as Pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
