import { UseQueryResult } from "react-query";

export default interface IReactQueryRes {
  data: any;
  dataUpdatedAt: number;
  error: any;
  errorUpdatedAt: number;
  isError: boolean;
  isFetched: boolean
  isFetchedAfterMount: boolean
  isFetching: boolean;
  isIdle: boolean;
  isLoading: boolean;
  isLoadingError: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isStale: boolean;
  isSuccess: boolean;
  refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>;
  remove: () => void;
  status: any;
}