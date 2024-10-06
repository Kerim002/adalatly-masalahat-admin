import { ReactNode } from "react";

type Props = {
  tableh: {
    name: string;
    size: number;
    icon?: ReactNode;
    type?: string;
    onClick?: () => void;
  }[];
};

const TableHead = ({ tableh }: Props) => {
  return (
    <div className="border bg-slate-600 mr-4 border-gray-200 flex rounded-t-xl py-2 z-10">
      {tableh?.map((item, index) => (
        <span
          className={`border-r border-gray-200 flex text-white justify-center font-semibold ${
            tableh.length === index + 1 && "border-none"
          }`}
          onClick={item.onClick}
          key={index}
          style={{ flex: item.size }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default TableHead;
