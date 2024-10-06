import React, { ReactNode } from "react";

type Modal = {
  changeModal: (modal: ReactNode | null) => void;
  close: () => void;
};
export const ModalContext = React.createContext<Modal>({
  changeModal: () => {},
  close: () => {},
});
