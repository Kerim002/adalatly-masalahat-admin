import { usePage } from "@/shared/hooks";
import { Pagination } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  pageSize: number;
  page: number;
  total: number;
};

const PaginationWrapper = ({ children, page, pageSize, total }: Props) => {
  const { setPage } = usePage();
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <>
      <div className="bg-white h-[calc(100vh-8rem)] gap-8 p-3 flex flex-col items-center">
        {children}
      </div>
      <div className="flex justify-center  w-full">
        <Pagination
          pageSize={pageSize}
          onChange={handlePageChange}
          total={total}
          current={page}
        />
      </div>
    </>
  );
};

export default PaginationWrapper;
