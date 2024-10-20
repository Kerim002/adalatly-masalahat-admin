import { usePage } from "@/shared/hooks";
import { Pagination } from "antd";

type Props = {
  pageSize?: number;
  page?: number;
  total?: number;
};

const CustomPagination = ({ page = 1, pageSize = 0, total = 0 }: Props) => {
  const { setPage } = usePage();
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <Pagination
      pageSize={pageSize}
      onChange={handlePageChange}
      total={total}
      current={page}
    />
  );
};

export default CustomPagination;
