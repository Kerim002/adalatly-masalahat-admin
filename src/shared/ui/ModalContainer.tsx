import { ReactNode } from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
type Props = {
  children: ReactNode;
  close: () => void;
};
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalContainer = ({ children, close }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="absolute bg-black bg-opacity-40 flex w-screen h-screen top-0 left-0 bottom-0 right-0 z-[52] items-center justify-center"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative text-gray-600`}
      >
        <button className=" absolute right-3 top-3">
          <IoCloseCircleOutline onClick={close} className="text-3xl" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ModalContainer;
