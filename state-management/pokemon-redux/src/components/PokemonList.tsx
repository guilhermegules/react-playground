import { useSelector } from "react-redux";
import { selectPokemon } from "../stores/pokemon.store";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const pokemons = useSelector(selectPokemon);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
