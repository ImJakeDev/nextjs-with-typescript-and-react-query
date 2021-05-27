import { usePokemonInfo, IPokemonQuery } from '../../hooks/usePokeInfo'
import {IPokemon} from '../../types/pokemon-tcg-interface'

export default function Profile ({data}:IPokemon) {
  const pokemon = data;
  
  const query:IPokemonQuery = usePokemonInfo(pokemon.name.toLowerCase());

  if (query.isLoading) {
    return <span>Loading...</span>
  }
 
  if (query.isError) {
    return <span>Error: {query.error.message}</span>
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.images.large} />
    </div>
  )
}