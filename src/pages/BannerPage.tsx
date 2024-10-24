import CustomPagination from "@/features/Pagination";
import { BannerContent, useBannersQuery } from "../entities/banner";
import { usePage } from "@/shared/hooks";

const Banner = () => {
  const { getPage } = usePage();
  const { data } = useBannersQuery({ page: getPage() });
  return (
    <div className="w-full border flex flex-col items-center  h-[calc(100vh-4rem)] p-4">
      <BannerContent />
      <CustomPagination
        page={data?.page}
        pageSize={data?.limit}
        total={data?.total}
      />
    </div>
  );
};

export default Banner;
