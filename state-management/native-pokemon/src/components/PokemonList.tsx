import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { pokemons } = usePokemon();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
