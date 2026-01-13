import { useQuery } from "@tanstack/react-query";
export const useApi = ({
  queryKey,
  queryFn,
  select,
  enabled,
  staleTime = 10000,
  cacheTime = 100000,
  refetchInterval,
  ...options
}) => {
  return useQuery({
    queryKey,
    queryFn,
    select,
    enabled,
    staleTime,
    cacheTime,
    refetchInterval,
    ...options,
  });
};
