import styles from '../styles/Home.module.css'

interface Props {
  link:string;
  title:string;
  description:string;
}

export default function Card(props: Props) {
  const {link, title, description} = props
  return (
    <a href={link} target="_blank" className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  )
}