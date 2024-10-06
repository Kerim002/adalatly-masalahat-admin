import { CgAdd } from "react-icons/cg";
import { useModal } from "../../shared/hooks/useModal";
import { VideoModal } from "../modal";
const AddBtn = () => {
  const { changeModal } = useModal();
  return (
    <div
      // onClick={() => changeModal(<BannerModal />)}
      onClick={() => changeModal(<VideoModal />)}
      className="p-2 bg-slate-500 rounded-full text-white"
    >
      <CgAdd className="text-3xl" />
    </div>
  );
};

export default AddBtn;
