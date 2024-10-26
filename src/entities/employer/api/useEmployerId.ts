import { useQuery } from "@tanstack/react-query";
import { employerService } from "./employer.service";

export const useEmployerIdQuery = (id: number) =>
  useQuery<EmployerItemSchema, Error>({
    queryKey: ["employer", id],
    queryFn: () => employerService.getEmployerById(id),
  });
