import { MediaContent } from "@/entities/media";
import { useMediaListQuery } from "@/entities/media/api/useMediaListQuery";
import CustomPagination from "@/features/Pagination";
import { mediaHead } from "@/shared/constants/tableHeads.constants";
import { usePage } from "@/shared/hooks";
import TableHead from "@/shared/ui/TableHead";

const VideosPage = () => {
  // return <MediaContent />;
  const { getPage } = usePage();
  const { data } = useMediaListQuery({ page: getPage(), pageSize: 5 });
  return (
    <div className="w-full  border flex flex-col items-center  h-[calc(100vh-4rem)] p-4">
      <TableHead tableh={mediaHead} />
      <MediaContent />
      <CustomPagination
        page={data?.page}
        pageSize={data?.limit}
        total={data?.total}
      />
    </div>
  );
};

export default VideosPage;
