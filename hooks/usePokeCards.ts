import { useQuery } from "react-query";
import IReactQueryRes from '../types/react-query-res-interface'

export interface ITradingCardGameQuery extends IReactQueryRes {}

const getCards = async () => {
  const res = await fetch(
    "https://api.pokemontcg.io/v2/cards", {
      headers: { "X-Api-Key": process.env.POKEMON_TCG_TOKEN ? process.env.POKEMON_TCG_TOKEN : "" }
    }
  )
  if (!res.ok) {
    throw new Error("Network response was not ok.")
  }
  return res.json();
};

export function usePokecards() {
  return useQuery("cards", getCards);
}
