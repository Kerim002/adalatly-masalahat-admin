import { usePage } from "@/shared/hooks";

import { NewsRow } from "@/widgets/rows";
import { useNews } from "../api/useNews";

const NewsContent = () => {
  const { getPage } = usePage();
  const { data } = useNews({ page: getPage() ?? 1 });
  if (!data) {
    return null;
  }
  return (
    <div className="h-[80vh] w-full  overflow-auto flex flex-col pt-5 gap-5">
      {data.data.map((item, index) => (
        <NewsRow key={item.id} item={item} index={index * getPage() + 1} />
      ))}
    </div>
  );
};

export default NewsContent;
