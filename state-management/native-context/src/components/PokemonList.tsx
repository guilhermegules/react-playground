import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { pokemons } = usePokemon();

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
