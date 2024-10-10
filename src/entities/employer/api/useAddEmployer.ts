import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";
import { employerService } from "./employer.service";

export const useEmployerAdd = () =>
  useMutation({
    mutationFn: (data: FormData) => employerService.addEmployer(data),
    onSuccess: (_, __) => {
      toast.success(`Employer add success`);
      queryClient.invalidateQueries({ queryKey: ["employer"] });
    },
    onError: (error) => toast.error(error.message),
  });
