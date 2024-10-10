import { useMutation } from "@tanstack/react-query";
import { employerService } from "./employer.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useEmployerDeleteMutation = () =>
  useMutation({
    mutationFn: (id: string) => employerService.deleteEmployer(id),
    onSuccess: () => {
      toast.success("Employer deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["employers"] });
    },
    onError: (error) => {
      toast.error("Failed to delete employer!");
      console.error(error);
    },
  });
