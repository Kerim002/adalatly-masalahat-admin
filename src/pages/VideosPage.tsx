import { MediaContent } from "@/entities/media";
import TableHead from "../shared/ui/TableHead";

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

const VideosPage = () => {
  return (
    <div className="">
      <TableHead tableh={mediaHead} />
      <div className="flex flex-col gap-3 pt-3 overflow-auto h-[80vh]">
        <MediaContent />
      </div>
    </div>
  );
};

export default VideosPage;
