import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";
import ModalContext from "./ModalProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../shared/api/query-client";
import { Toaster } from "sonner";
const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        <RouterProvider router={router} />;
        <Toaster richColors closeButton />
      </ModalContext>
    </QueryClientProvider>
  );
};

export default Providers;
