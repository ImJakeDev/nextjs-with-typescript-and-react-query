interface IProps {
  small?: string;
  large?: string;
}

export default function Card({small, large}:IProps) {
  return (
    <li>
      <img src={large ? large : small}/>
    </li>
  )
}