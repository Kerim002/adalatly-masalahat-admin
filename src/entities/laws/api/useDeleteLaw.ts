import { useMutation } from "@tanstack/react-query";
import { lawService } from "./laws.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useDeleteLawMutation = () =>
  useMutation({
    mutationFn: (id: number) => lawService.deleteLaw(id),
    onSuccess: (_, __, id) => {
      toast.success(`law ${id} delete success`);
      queryClient.invalidateQueries({ queryKey: ["laws"] });
    },
    onError: (error) => toast.error(error.message),
  });
