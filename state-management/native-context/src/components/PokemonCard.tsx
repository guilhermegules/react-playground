import { Pokemon } from "../models/pokemon.model";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>HP: {pokemon.hp}</p>
      <p>
        Attack: {pokemon.attack} - Special Attack: {pokemon.special_attack}
      </p>
      <p>
        Defense: {pokemon.defense} - Special defense: {pokemon.special_defense}
      </p>
      <p>Speed: {pokemon.speed}</p>
      <p>Type: {pokemon.type.join("/")}</p>
    </div>
  );
};

export default PokemonCard;
