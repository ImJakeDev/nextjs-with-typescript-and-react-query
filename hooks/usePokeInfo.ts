import { useQuery } from "react-query";
import axios from "axios";

const getPokemonInfo = async (name: string) => {
  const data = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name}/`
  )
  return data.data;
};

export default function usePokeInfo(name: string) {
  return useQuery(["pokemon info", name], () => getPokemonInfo(name));
}
