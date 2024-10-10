import { usePage } from "@/shared/hooks";
import TableHead from "@/shared/ui/TableHead";
import { PaginationWrapper } from "@/widgets";
import { NewsRow } from "@/widgets/rows";
import { useNews } from "../api/useNews";

const newsHead = [
  {
    size: 0.5,
    name: "No",
  },
  {
    size: 3,
    name: "News",
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

const NewsContent = () => {
  const { getPage } = usePage();
  const { data } = useNews({ page: 1, pageSize: 10 });
  if (!data) {
    return null;
  }
  return (
    <PaginationWrapper
      page={data.page}
      pageSize={data.pageSize}
      total={data.total}
    >
      <div className="w-full">
        <TableHead tableh={newsHead} />
        <div className="h-full flex flex-col pt-5 gap-5">
          {data.news.map((item, index) => (
            <NewsRow key={item.id} item={item} index={index * getPage() + 1} />
          ))}
        </div>
      </div>
    </PaginationWrapper>
  );
};

export default NewsContent;
