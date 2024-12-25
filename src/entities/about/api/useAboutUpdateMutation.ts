import { useMutation } from "@tanstack/react-query";
import { aboutService } from "./about.service";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";

export const useAboutUpdateMutation = () =>
  useMutation({
    mutationFn: (body: AboutSchema) => aboutService.updateAboutPage(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about"] });
      toast.success("About updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
