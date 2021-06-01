import { useRouter } from "next/router";
import usePokeCards from '../../hooks/usePokeCards'
import Card from '../../components/pokemon/Card'
import Loader from '../../components/pokemon/Loader'
import styles from '../../styles/Pokemon.module.css'
import {IPokemonData} from '../../types/pokemon-tcg-interface'

export default function Pokemon() {
  const router = useRouter();

  const { data, isFetching } = usePokeCards();

  !isFetching ? console.log("The first card obj", data[0]) : console.log(isFetching);

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {!isFetching ? (
        <div className={styles.container}>
          {data.map((card:IPokemonData, id:string) => (
            <Card key={id + card.id} small={card.images.small} id={card.id} />
          ))}
        </div>
      ):(
        <Loader/>
      )}
    </div>
  )
}