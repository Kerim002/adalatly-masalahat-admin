import { CgAdd } from "react-icons/cg";
import { useModal } from "../../shared/hooks/useModal";
import NewsModal from "../modal/NewsModal";
import { BannerModal, VideoModal } from "../modal";
import EmployeeModal from "../modal/EmployeeModal";
import { useLocation, useNavigate } from "react-router-dom";
const AddBtn = () => {
  const { changeModal } = useModal();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleModal = () => {
    switch (pathname) {
      case "/employees":
        changeModal(<EmployeeModal />);
        break;
      case "/banner":
        changeModal(<BannerModal />);
        break;
      case "/news":
        changeModal(<NewsModal />);
        break;
      case "/videos":
        changeModal(<VideoModal />);
        break;
      case "/laws":
        navigate("/laws/add");
        break;
      default:
        break;
    }
  };
  return (
    <div
      onClick={handleModal}
      className="p-2 bg-slate-500 rounded-full text-white"
    >
      <CgAdd className="text-3xl" />
    </div>
  );
};

export default AddBtn;
