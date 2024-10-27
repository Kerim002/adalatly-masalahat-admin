import { useMutation } from "@tanstack/react-query";
import { authService } from "./auth.service";

export const useLoginMutation = () =>
  useMutation<any, Error, LoginRequest, unknown>({
    mutationFn: (body) => authService.login(body),
  });
