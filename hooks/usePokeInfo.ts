import { useQuery } from "react-query";
import IReactQueryRes from '../types/react-query-res-interface'

export interface IPokemonQuery extends IReactQueryRes {}

const getPokemonInfo = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json();
};

export function usePokemonInfo(name: string) {
  return useQuery(["pokemon-info", name], () => getPokemonInfo(name));
}
