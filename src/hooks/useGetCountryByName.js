import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCountryByName } from "../services/apiCountries";
import { useEffect } from "react";
export function useGetCountriesByName(name) {
  const queryClient = useQueryClient();
  const { data: country, isLoading } = useQuery({
    queryKey: ["country"],
    queryFn: () => getCountryByName({ name }),
  });

  useEffect(
    function () {
      queryClient.invalidateQueries({
        queryKey: ["country"],
      });
    },
    [name, queryClient]
  );
  return { country, isLoading };
}
