import usePokeCards from '../hooks/usePokeCards'
import Card from '../components/pokemon/Card'
import styles from '../styles/Pokemon.module.css'

export default function Pokemon() {

  const { status, data, error, isFetching } = usePokeCards();

  return (
     !isFetching ? (
      <div className={styles.container}>
        {data.map((card:any, id:string) => (
          <Card key={id + card.id} small={card.images.small} id={card.id} />
        ))}
      </div>
    ):(
      <div>Loading</div>
    )
  )
}