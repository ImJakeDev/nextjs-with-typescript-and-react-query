import { useRouter } from "next/router";
import usePokemonId from '../../hooks/usePokemonId'
import Profile from '../../components/pokemon/Profile'

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;

  const { status, data, error, isFetching } = usePokemonId(id);

  return (
    <div>
      <p>Pokemon ID: {id}</p>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {!isFetching ? (
        <Profile data={data} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
