import { useRouter } from "next/router";
import usePokemonId from '../../hooks/usePokemonId'

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;

  const { status, data, error, isFetching } = usePokemonId(id);

  return <p>Pokemon ID: {id}</p>;
};
