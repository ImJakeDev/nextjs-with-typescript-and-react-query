import Link from 'next/link'
import styles from '../../styles/Pokemon.module.css'
interface IProps {
  id: string;
  small?: string;
  large?: string;
}

export default function Card({id, small, large}:IProps) {
  return (
    <div>
      <Link href={`/pokemon/${id}`}>
        <div className={[styles.card, styles.pokemonCard].join(" ")}>
            <img src={large || small || undefined} style={{width: "100%" }}/>
        </div>
      </Link>
    </div>
  )
}