import Link from 'next/link'
import styles from '../../styles/Pokemon.module.css'
interface IProps {
  id: string;
  small?: string;
  large?: string;
}

export default function Card({id, small, large}:IProps) {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className={styles.cardContainer}>
        <img src={large || small || undefined} className={styles.pokemonCard} />
      </div>
    </Link>
  )
}