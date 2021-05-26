import { useQuery } from "react-query";

const getPokemonInfo = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json();
};

export default function usePokemonInfo(name: string) {
  return useQuery(["pokemon-info", name], () => getPokemonInfo(name));
}
