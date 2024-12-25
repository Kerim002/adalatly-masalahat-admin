import { useMutation } from "@tanstack/react-query";
import { authService } from "./auth.service";

export const useLogout = () =>
  useMutation<any, Error, any>({
    mutationFn: () => authService.logout(),
  });
