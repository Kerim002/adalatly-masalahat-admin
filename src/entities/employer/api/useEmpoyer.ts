import { useQuery } from "@tanstack/react-query";
import { employerService } from "./employer.service";

export const useEmployerQuery = (params: MediaListRequest) =>
  useQuery<EmployerResponse, Error>({
    queryKey: ["employer", params],
    queryFn: () => employerService.getEmployers(params),
  });
