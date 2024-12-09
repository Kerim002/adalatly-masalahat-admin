import TableHead from "@/shared/ui/TableHead";
import MessageRow from "@/widgets/rows/MessageRow";

const messageHead = [
  {
    name: "No",
    size: 1,
  },
  {
    name: "User",
    size: 4,
  },
  {
    name: "Last Message",
    size: 6,
  },
  {
    name: "Status",
    size: 2,
  },
];

const MessagePage = () => {
  return (
    <div className="w-full border flex flex-col items-center border-red-500 h-[calc(100vh-4rem)] p-4">
      <TableHead tableh={messageHead} />
      <div className="flex flex-col py-5 gap-3">
        <MessageRow />
      </div>
    </div>
  );
};

export default MessagePage;
