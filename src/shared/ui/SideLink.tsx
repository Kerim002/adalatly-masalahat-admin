import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  title: string;
  children: ReactNode;
};

const SideLink = ({ children, path, title }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-2 py-2  transition-colors ease-linear px-3 ${
          isActive && "bg-slate-600  rounded-lg"
        }`
      }
    >
      {children}
      <p className="text-lg">{title}</p>
    </NavLink>
  );
};

export default SideLink;
