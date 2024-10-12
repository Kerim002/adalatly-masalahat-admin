import { useNews } from "@/entities/news/api/useNews";
import NewsContent from "@/entities/news/ui/NewsContent";
import CustomPagination from "@/features/Pagination";
import { newsHead } from "@/shared";
import { usePage } from "@/shared/hooks";
import TableHead from "@/shared/ui/TableHead";

const NewsPage = () => {
  const { getPage } = usePage();
  const { data } = useNews({ page: getPage() ?? 1, pageSize: 10 });
  return (
    <div className="w-full border flex flex-col items-center border-red-500 h-[calc(100vh-4rem)] p-4">
      <TableHead tableh={newsHead} />
      <NewsContent />
      <CustomPagination
        page={data?.page}
        pageSize={data?.pageSize}
        total={data?.total}
      />
    </div>
  );
};

export default NewsPage;
