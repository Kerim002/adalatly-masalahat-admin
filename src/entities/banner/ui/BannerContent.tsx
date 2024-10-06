import { BannerCard } from "../../../widgets";
import { useBannersQuery } from "../api/useBannersQuery";

const BannerContent = () => {
  const { data, isLoading, isError } = useBannersQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching banners</div>;
  if (!data?.length) {
    return <div>No banners available</div>;
  }
  return (
    <>
      {data?.map((banner) => (
        <BannerCard key={banner.id} banner={banner} />
      ))}
    </>
  );
};

export default BannerContent;
