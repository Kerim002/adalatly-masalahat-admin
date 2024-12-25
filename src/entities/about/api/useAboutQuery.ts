import { useQuery } from "@tanstack/react-query";
import { aboutService } from "./about.service";

export const useAboutQuery = () =>
  useQuery({
    queryKey: ["about"],
    queryFn: () => aboutService.getAboutPage(),
  });
