import { usePage } from "@/shared/hooks";
import { useMediaListQuery } from "../api/useMediaListQuery";
import { VideoRow } from "@/widgets/rows";

const MediaContent = () => {
  const { getPage } = usePage();
  const { data } = useMediaListQuery({ page: getPage() });
  if (!data) {
    return <div className="w-full text-center">No Data</div>;
  }
  return data?.media?.map((item, index) => {
    return <VideoRow key={item.id} item={item} index={index * getPage() + 1} />;
  });
};

export default MediaContent;
