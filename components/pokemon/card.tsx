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
      <img src={large || small || undefined} className={styles.pokemonCard} />
    </Link>
  )
}