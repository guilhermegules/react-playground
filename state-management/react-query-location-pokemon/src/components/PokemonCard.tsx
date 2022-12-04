import { Pokemon } from "../models/pokemon.model";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <li className="cursor-pointer col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto bg-transparent rounded-full"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">
          {pokemon.name}
        </h3>
      </div>
    </li>
  );
};

export default PokemonCard;
