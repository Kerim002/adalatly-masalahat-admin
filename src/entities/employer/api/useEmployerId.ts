import { useQuery } from "@tanstack/react-query";
import { employerService } from "./employer.service";

export const useEmployerIdQuery = (id: number) =>
  useQuery<EmployerItemSchema, Error>({
    queryKey: ["singleEmployer", id],
    queryFn: () => employerService.getEmployerById(id),
  });
