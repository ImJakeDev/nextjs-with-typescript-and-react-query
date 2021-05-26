import usePokemonInfo from '../../hooks/usePokeInfo'

interface IPokemon {
  data: any;
}

interface IPokemonInfo {
  data: any;
  error: any;
  status: string;
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
}

export default function Profile (props:IPokemon) {

  const {data:pokemon} = props
  const {name} = pokemon
  const lowerCaseName = name.toLowerCase()

  const { status, data, error, isFetching, isLoading, isError }:IPokemonInfo = usePokemonInfo(lowerCaseName);
  console.log("Status:", status);
  console.log("Error:", error);
  console.log("Data:", data);
  console.log("Is Fetching:", isFetching);
  console.log("Is Loading:", isLoading);
  console.log("Is Error:", isError);

  if (isLoading) {
     return <span>Loading...</span>
   }
 
   if (isError) {
     return <span>Error: {error.message}</span>
   }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.images.large} />
    </div>
  )
}