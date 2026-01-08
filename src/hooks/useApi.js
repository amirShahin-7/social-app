import { useQuery } from "@tanstack/react-query";
export const useApi = ({
  queryKey,
  queryFn,
  select,
  enabled,
  staleTime = 500000,
  cacheTime = 1000000,
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
