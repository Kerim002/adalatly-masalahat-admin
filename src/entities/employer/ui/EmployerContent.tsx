import EmployeeCard from "@/widgets/cards/EmployeeCard";
import { useEmployerQuery } from "../api/useEmpoyer";
import { usePage } from "@/shared/hooks";

const EmployerContent = () => {
  const { getPage } = usePage();
  const { data } = useEmployerQuery({ page: getPage() });

  if (!data) {
    return null;
  }
  if (!data.data) {
    return null;
  }
  return (
    <div className="h-[calc(100vh-10rem)]  w-full  mb-3 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 gap-x-4 gap-y-8">
      {data.data?.map((item) => (
        <EmployeeCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default EmployerContent;
