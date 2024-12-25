import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../widgets/navbar/Navbar";
import Sidebar from "../widgets/sidebar/Sidebar";
import { setNavigate } from "@/shared/api/navigate";

const LayoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate); // Set the navigate function globally
  }, [navigate]);
  return (
    <div className="w-full h-screen flex ">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-full h-[calc(100vh-4rem)] overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
