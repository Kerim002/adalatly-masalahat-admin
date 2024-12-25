import { useMutation } from "@tanstack/react-query";
import { lawService } from "./laws.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useLawUpdateMutation = () =>
  useMutation({
    mutationFn: (body: LawItemSchema) => lawService.updateLaw(body),
    onSuccess: (_, { id }) => {
      toast.success(`law ${id} updated success`);
      queryClient.invalidateQueries({ queryKey: ["laws", String(id)] });
    },
    onError: (error) => toast.error(error.message),
  });
