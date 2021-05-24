import usePokeCards from '../hooks/usePokeCards'

export default function Pokemon() {

  const { status, data, error, isFetching } = usePokeCards();

  return (
     !isFetching ? (
      <ul>
      {data.map((card:any) => (
        <text>{JSON.stringify(card.images.large)}<br></br><br></br></text>
      ))}
    </ul>
    ):(
      <div>Loading</div>
    )
  )
}