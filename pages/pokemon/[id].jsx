import { useRouter } from "next/router";
import usePokemonId from '../../hooks/usePokemonId'

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
        <div>
          <h1>{data.name}</h1>
          <img src={data.images.large} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
