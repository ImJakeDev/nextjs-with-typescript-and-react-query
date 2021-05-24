import { useQuery } from "react-query";
import axios from "axios";

const getCards = async () => {
  const data = await axios.get(
    "https://api.pokemontcg.io/v2/cards", {
      headers: { "X-Api-Key": process.env.POKEMON_TCG_TOKEN}
    }
  )
  return data.data.data;
};

export default function usePost() {
  return useQuery("cards", getCards);
}
