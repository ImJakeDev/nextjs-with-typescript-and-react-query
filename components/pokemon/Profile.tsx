import usePokeInfo from '../../hooks/usePokeInfo'

interface IPokemon {
  data: any
}

export default function Profile (props:IPokemon) {

  const {data:pokemon} = props
  const {name} = pokemon
  const lowerCaseName = name.toLowerCase()

  const { status, data, error, isFetching } = usePokeInfo(lowerCaseName);

  const handleInfo = (pokemonName:string) => {
    console.log(data);
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <button onClick={() => handleInfo(pokemon.name)}>More info</button>
      <img src={pokemon.images.large} />
    </div>
  )
}