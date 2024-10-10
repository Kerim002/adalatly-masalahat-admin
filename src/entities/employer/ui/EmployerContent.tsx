import { PaginationWrapper } from "@/widgets";
import EmployeeCard from "@/widgets/cards/EmployeeCard";
import { useEmployerQuery } from "../api/useEmpoyer";

const EmployerContent = () => {
  const { data } = useEmployerQuery();

  if (!data) {
    return null;
  }

  return (
    <PaginationWrapper
      page={data.page}
      pageSize={data.pageSize}
      total={data.total}
    >
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 gap-x-4 gap-y-8 w-full">
        {data.employer.map((item) => (
          <EmployeeCard item={item} key={item.id} />
        ))}
      </div>
    </PaginationWrapper>
  );
};

export default EmployerContent;
