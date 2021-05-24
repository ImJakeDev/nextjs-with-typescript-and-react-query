import styles from '../../styles/Pokemon.module.css'
interface IProps {
  small?: string;
  large?: string;
}

export default function Card({small, large}:IProps) {
  return (
    <div>
      <img src={large || small || undefined} className={styles.pokemonCard} />
    </div>
  )
}