import usePokeCards from '../hooks/usePokeCards'
import Card from '../components/pokemon/card'
import styles from '../styles/Pokemon.module.css'

export default function Pokemon() {

  const { status, data, error, isFetching } = usePokeCards();

  return (
     !isFetching ? (
      <div className={styles.container}>
        {data.map((card:any, id:string) => (
          <Card key={id} small={card.images.small} large={card.images.large} />
        ))}
      </div>
    ):(
      <div>Loading</div>
    )
  )
}