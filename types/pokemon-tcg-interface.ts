export default interface IPokemon {
  data: IPokemonData;
}

interface IPokemonData {
  abilities: [];
  artist: string;
  attacks: IPokemonAttacks[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  hp: string;
  id: string;
  images: IPokemonImages;
  legalities: {};
  level: string;
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: IPokemonPowerValues[];
  retreatCost: string[];
  set: IPokemonSet;
  subtypes: string[];
  supertype: string;
  tcgplayer: IPokemonSetTCGPlayer;
  types: string[];
  weaknesses: IPokemonPowerValues[];
}

interface IPokemonAttacks {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string
}

interface IPokemonImages {
  large: string;
  small: string;
}

interface IPokemonPowerValues {
  type: string;
  value: string;
}

interface IPokemonSet {
  id: string;
  images: IPokemonSetImages;
  legalities: IPokemonSetLegalities;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: Date;
  series: string;
  total: number;
  updatedAt: Date;
}

interface IPokemonSetImages {
  logo: string;
  symbol: string;
}

interface IPokemonSetLegalities {
  unlimited: string;
}

interface IPokemonSetTCGPlayer {
  prices: IPokemonSetTCGPlayerPrices;
  updatedAt: Date;
  url: string
}
interface IPokemonSetTCGPlayerPrices {
  holofoil: IPokemonSetTCGPlayerTypesPrices;
  reverseHolofoil: IPokemonSetTCGPlayerTypesPrices;
}
interface IPokemonSetTCGPlayerTypesPrices {
  directLow: any;
  high: number;
  low: number;
  market: number;
  mid: number
}