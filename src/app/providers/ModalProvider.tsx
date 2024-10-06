import React, { ReactNode } from "react";
import ModalContainer from "../../shared/ui/ModalContainer";
import { AnimatePresence } from "framer-motion";
import { ModalContext } from "../../shared/context/ModalContext";

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = React.useState<ReactNode>(null);
  const changeModal = (newModal: ReactNode | null) => {
    setModal(newModal);
  };

  const close = () => {
    setModal(null);
  };
  return (
    <ModalContext.Provider value={{ changeModal, close }}>
      <AnimatePresence initial={false} mode="wait">
        {modal && <ModalContainer close={close}>{modal}</ModalContainer>}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
