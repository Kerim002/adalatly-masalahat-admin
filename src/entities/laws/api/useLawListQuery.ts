import { useQuery } from "@tanstack/react-query";
import { lawService } from "./laws.service";

export const useLawListQuery = () =>
  useQuery<LawsResponse, Error>({
    queryKey: ["laws"],
    queryFn: () => lawService.lawGetAll(),
  });
