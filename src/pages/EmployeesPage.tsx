import { useEmployerQuery } from "@/entities/employer/api/useEmpoyer";
import EmployerContent from "@/entities/employer/ui/EmployerContent";
import CustomPagination from "@/features/Pagination";
import { usePage } from "@/shared/hooks";

const EmployeesPage = () => {
  // return <EmployerContent />;
  const { getPage } = usePage();
  const { data } = useEmployerQuery({ page: getPage() });

  return (
    <div className="w-full border flex flex-col items-center border-red-500 h-[calc(100vh-4rem)] p-4">
      <EmployerContent />
      <CustomPagination
        page={data?.page}
        pageSize={data?.limit}
        total={data?.total}
      />
    </div>
  );
};

export default EmployeesPage;
