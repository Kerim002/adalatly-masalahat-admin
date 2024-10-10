import { useQuery } from "@tanstack/react-query";
import { employerService } from "./employer.service";

export const useEmployerQuery = () =>
  useQuery<EmployerResponse, Error>({
    queryKey: ["employer"],
    queryFn: () => employerService.getEmployers(),
  });
