import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";
import { employerService } from "./employer.service";

export const useEmployerUpdate = () =>
  useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) =>
      employerService.updateEmployer(id, data),
    onSuccess: (_, __) => {
      toast.success(`Employer update success`);
      queryClient.invalidateQueries({ queryKey: ["employer"] });
    },
    onError: (error) => toast.error(error.message),
  });
