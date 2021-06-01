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
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        {query.data.sprites.front_default ? (
            <img src={query.data.sprites.front_default} />
          ):(
            <div>No sprite data...</div>
        )}
        <h1>{pokemon.name}</h1>
      </div>
      <br></br>
      <img src={pokemon.images.large} />
    </div>
  )
}