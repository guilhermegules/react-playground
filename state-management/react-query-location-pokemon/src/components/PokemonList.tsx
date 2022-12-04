import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import { Link } from "@tanstack/react-location";

const PokemonList = () => {
  const { pokemons } = usePokemon();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
          <PokemonCard pokemon={pokemon} />
        </Link>
      ))}
    </ul>
  );
};

export default PokemonList;
