import { useQueryClient, useQuery } from "@tanstack/react-query";

import { getCountriesByRegion } from "../services/apiCountries";
import { useEffect } from "react";
export function useGetCountriesByRegion(region) {
  const queryClient = useQueryClient();
  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountriesByRegion({ region }),
  });
  useEffect(() => {
    queryClient.invalidateQueries(["countries", region]);
  }, [queryClient, region]);

  return { countries, isLoading };
}
