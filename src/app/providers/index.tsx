import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";
import ModalContext from "./ModalProvider";
const Providers = () => {
  return (
    <ModalContext>
      <RouterProvider router={router} />;
    </ModalContext>
  );
};

export default Providers;
