import { QueryObserverOptions } from '@tanstack/react-query'

export const defaultQueryOptions: QueryObserverOptions = {
  retry: 0,
  useErrorBoundary: true,
  refetchOnMount: false,
  keepPreviousData: true,
  refetchOnWindowFocus: false,
}
