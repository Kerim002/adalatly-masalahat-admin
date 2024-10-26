import { useMutation } from "@tanstack/react-query";
import { lawService } from "./laws.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useAddLawMutation = () =>
  useMutation({
    mutationFn: (body: Omit<LawItemSchema, "id">) => lawService.createLaw(body),
    onSuccess: (_, __, id) => {
      toast.success(`law ${id} added success`);
      queryClient.invalidateQueries({ queryKey: ["laws"] });
    },
    onError: (error) => toast.error(error.message),
  });
