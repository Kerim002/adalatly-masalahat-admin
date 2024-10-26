import { useMutation } from "@tanstack/react-query";
import { authService } from "./auth.service";

export const useLogin = () =>
  useMutation<any, Error, LoginRequest>({
    mutationFn: (body: LoginRequest) => authService.login(body),
  });
