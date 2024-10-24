import { usePage } from "@/shared/hooks";
import { useMediaListQuery } from "../api/useMediaListQuery";
import { VideoRow } from "@/widgets/rows";

const MediaContent = () => {
  const { getPage } = usePage();
  const { data } = useMediaListQuery({ page: getPage(), pageSize: 5 });
  if (!data) {
    return <div className="w-full text-center">No Data</div>;
  }
  if (!data.data) {
    return <div className="w-full text-center">No Data</div>;
  }
  return (
    <div className="h-[80vh] w-full  overflow-auto flex flex-col pt-5 gap-5">
      {data.data.map((item, index) => (
        <VideoRow key={item.id} item={item} index={index * getPage() + 1} />
      ))}
    </div>
  );
};

export default MediaContent;
