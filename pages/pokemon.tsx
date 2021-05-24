import { useRouter } from "next/router";
import usePokeCards from '../hooks/usePokeCards'
import Card from '../components/pokemon/Card'
import styles from '../styles/Pokemon.module.css'

export default function Pokemon() {
  const router = useRouter();

  const { status, data, error, isFetching } = usePokeCards();

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {!isFetching ? (
        <div className={styles.container}>
          {data.map((card:any, id:string) => (
            <Card key={id + card.id} small={card.images.small} id={card.id} />
          ))}
        </div>
      ):(
        <div>Loading</div>
      )}
    </div>
  )
}