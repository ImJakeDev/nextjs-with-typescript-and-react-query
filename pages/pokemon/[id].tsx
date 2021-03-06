import { useRouter } from "next/router";
import { usePokemonId, IPokemonTCGIdQuery } from "../../hooks/usePokemonId";
import Profile from '../../components/pokemon/Profile'
import Loader from '../../components/pokemon/Loader'

export default function Pokemon() {
  const router = useRouter();
  
  const { id }: { id?: string } = router.query;

  const query: IPokemonTCGIdQuery = typeof id === "string" ? usePokemonId(id) : usePokemonId(""); // This feels really not right but sort of fixes TS error...

  return (
    <div>
      <p>Pokemon ID: {id}</p>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {!query.isFetching && !query.isLoading && !query.isError && query.isSuccess ? (
        <Profile data={query.data} />
      ) : (
        query.isError ? <div>{query.error.message}</div> : <Loader/>
      )}
    </div>
  );
};
