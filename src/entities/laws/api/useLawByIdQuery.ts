import { useQuery } from "@tanstack/react-query";
import { lawService } from "./laws.service";

export const useLawByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["laws", id],
    queryFn: () => lawService.lawById(id),
  });
