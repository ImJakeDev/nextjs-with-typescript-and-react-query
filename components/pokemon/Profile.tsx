import { usePokemonInfo, IPokemonQuery } from '../../hooks/usePokeInfo'
import IPokemon from '../../types/pokemon-tcg-interface'

export default function Profile ({data}:IPokemon) {
  console.log(data);
  
  const query:IPokemonQuery = usePokemonInfo(data.name.toLowerCase());
  console.log(query);


  if (query.isLoading) {
     return <span>Loading...</span>
   }
 
   if (query.isError) {
     return <span>Error: {query.error.message}</span>
   }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.images.large} />
    </div>
  )
}