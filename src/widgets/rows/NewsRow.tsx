import { Button, Popconfirm } from "antd";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { useModal } from "@/shared/hooks";
import { useDeleteNews } from "@/entities/news/api/useDeleteNews";
type Props = {
  item: NewsItemSchema;
  index: number;
};
const NewsRow = ({ item, index }: Props) => {
  const { changeModal } = useModal();
  const { mutate } = useDeleteNews();
  return (
    <div className="flex items-center gap-5">
      <div className="flex-[0.5] text-center">{index}</div>
      <div className="flex-[3] flex justify-center items-center">
        <img
          src={item.image}
          className="h-24 w-36 rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="flex-[4] break-words ">{item.tm_title}</div>
      <div className="flex-[4] break-words">{item.ru_title}</div>
      <div className="flex-[4] break-words">{item.en_title}</div>
      <div className="flex-[2] flex justify-center items-center">
        <Button
          //   onClick={() => changeModal(<VideoModal  />)}
          type="primary"
        >
          <BiEdit className="text-xl" />
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => mutate(`${item.id}`)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger type="primary">
            <TbTrash className="text-xl" />
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default NewsRow;
