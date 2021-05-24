import usePokeCards from '../hooks/usePokeCards'
import Card from '../components/pokemon/card'

export default function Pokemon() {

  const { status, data, error, isFetching } = usePokeCards();

  return (
     !isFetching ? (
      <ul>
      {data.map((card:any, id:string) => (
        <Card key={id} large={card.images.large}/>
      ))}
    </ul>
    ):(
      <div>Loading</div>
    )
  )
}