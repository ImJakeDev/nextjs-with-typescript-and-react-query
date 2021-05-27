import { useQuery } from "react-query";
import IReactQueryRes from '../types/react-query-res-interface'

export interface IPokemonTCGIdQuery extends IReactQueryRes {}

const getPokemonById = async (pokemonId: string) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${pokemonId}`, {
    headers:{
      "X-Api-Key": process.env.POKEMON_TCG_TOKEN || "" 
    }
  })
  console.log("what is the res obj", res);
  
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  
  const {data, errors} = await res.json()

  if (errors) {
    throw new Error('Network response was not ok')
  }

  return data
};

export function usePokemonId(pokemonId: string) {
  return useQuery(["pokemon", pokemonId], () => getPokemonById(pokemonId));
}
