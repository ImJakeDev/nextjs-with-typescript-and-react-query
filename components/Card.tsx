import styles from '../styles/Home.module.css'

export default function Card(props: {link:string, title:string, description:string}) {
  const {link, title, description} = props
  return (
    <a href={link} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  )
}