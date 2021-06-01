import { useRouter } from "next/router";
import { usePokecards, ITradingCardGameQuery } from '../../hooks/usePokeCards'
import Card from '../../components/pokemon/Card'
import Loader from '../../components/pokemon/Loader'
import styles from '../../styles/Pokemon.module.css'
import {IPokemonData} from '../../types/pokemon-tcg-interface'

export default function Pokemon() {
  const router = useRouter();

  const query:ITradingCardGameQuery = usePokecards();

  console.log(query);
  

  if (query.isLoading) {
    return <Loader />
  }
 
  if (query.isError) {
    return <span>Error: {query.error.message}</span>
  }

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {!query.isFetching ? (
        <div className={styles.container}>
          {query.data.map((card:IPokemonData, id:string) => (
            <Card key={id + card.id} small={card.images.small} id={card.id} />
          ))}
        </div>
      ):(
        <Loader/>
      )}
    </div>
  )
}