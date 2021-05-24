import { useQuery } from "react-query";
import axios from "axios";

const getPokemonById = async (pokemonId: string) => {
  const data = await axios.get(
    `https://api.pokemontcg.io/v2/cards/${pokemonId}`, {
      headers: { "X-Api-Key": process.env.POKEMON_TCG_TOKEN}
    }
  )
  return data.data.data;
};

export default function usePokemonId(pokemonId: string) {
  return useQuery(["pokemon", pokemonId], () => getPokemonById(pokemonId));
}
