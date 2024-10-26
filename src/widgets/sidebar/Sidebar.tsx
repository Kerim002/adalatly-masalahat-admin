import { BiHome, BiLogOut, BiUser } from "react-icons/bi";
import SideLink from "../../shared/ui/SideLink";
import { useLogout } from "@/entities/auth/api/useLogout";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { mutate } = useLogout();

  const navigate = useNavigate();

  const handleLogout = () => {
    mutate({}, { onSuccess: () => navigate("/login") });
  };

  return (
    <div className="w-80 h-full">
      <div className="bg-slate-700 h-36 text-white flex items-center justify-center flex-col text-3xl">
        <h2>Adalatly</h2>
        <h2>Maslahat</h2>
      </div>
      <div className="h-[calc(100%-9rem)] bg-slate-800  flex flex-col justify-between">
        <div className="px-5">
          <h3 className="text-2xl py-5 text-gray-200">Sahypalar</h3>
          <div className="border-t border-orange-700 text-white py-5 gap-1 flex flex-col">
            <SideLink path="/" title="Home">
              <BiHome className="text-2xl" />
            </SideLink>
            <SideLink path="/employees" title="Employees">
              <BiUser className="text-2xl" />
            </SideLink>
            <SideLink path="/laws" title="Laws">
              <BiUser className="text-2xl" />
            </SideLink>
            <SideLink path="/banner" title="Banner">
              <BiUser className="text-2xl" />
            </SideLink>
            <SideLink path="/news" title="News">
              <BiUser className="text-2xl" />
            </SideLink>
            <SideLink path="/videos" title="Videos">
              <BiUser className="text-2xl" />
            </SideLink>
            <SideLink path="/about" title="About">
              <BiUser className="text-2xl" />
            </SideLink>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex  m-5 text-white items-center gap-2 py-2  transition-colors ease-linear px-3"
        >
          <BiLogOut className="text-2xl text-red-500" />
          <p className="text-xl text-red-500">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
