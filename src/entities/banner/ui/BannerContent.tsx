import { usePage } from "@/shared/hooks";
import { BannerCard } from "../../../widgets";
import { useBannersQuery } from "../api/useBannersQuery";

const BannerContent = () => {
  const { getPage } = usePage();
  const { data, isLoading, isError } = useBannersQuery({ page: getPage() });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching banners</div>;
  if (!data) {
    return <div>No banners available</div>;
  }
  if (!data.data) {
    return <div>No banners available</div>;
  }
  return (
    <div className="h-[calc(100vh-10rem)] grid 2xl:grid-cols-5 w-full  gap-3 xl:grid-cols-4 grid-cols-3">
      {data.data.map((banner) => (
        <BannerCard key={banner.id} banner={banner} />
      ))}
    </div>
  );
};

export default BannerContent;
