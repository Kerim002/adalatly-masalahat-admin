import { usePage } from "@/shared/hooks";
import { useMediaListQuery } from "../api/useMediaListQuery";
import { VideoRow } from "@/widgets/rows";
import TableHead from "@/shared/ui/TableHead";
import { PaginationWrapper } from "@/widgets";

const mediaHead = [
  {
    size: 0.5,
    name: "No",
  },
  {
    size: 3,
    name: "Media",
  },
  {
    size: 4,
    name: "Tm title",
  },
  {
    size: 4,
    name: "Ru title",
  },
  {
    size: 4,
    name: "En title",
  },
  {
    size: 2,
    name: "Action",
  },
];

const MediaContent = () => {
  const { getPage } = usePage();
  const { data } = useMediaListQuery({ page: getPage() });
  if (!data) {
    return <div className="w-full text-center">No Data</div>;
  }
  console.log(data.media);
  return (
    <PaginationWrapper
      page={data.page}
      pageSize={data.pageSize}
      total={data.total}
    >
      <div className="w-full">
        <TableHead tableh={mediaHead} />
        <div className="h-full flex flex-col pt-5 gap-5">
          {data.media.map((item, index) => (
            <VideoRow key={item.id} item={item} index={index * getPage() + 1} />
          ))}
        </div>
      </div>
    </PaginationWrapper>
  );
};

export default MediaContent;
