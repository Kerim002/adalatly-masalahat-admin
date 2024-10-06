import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../widgets/navbar/Navbar";
import Sidebar from "../widgets/sidebar/Sidebar";

const LayoutPage = () => {
  return (
    <div className="w-full h-screen flex ">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-full h-[calc(100vh-4.3rem)]  p-3 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
