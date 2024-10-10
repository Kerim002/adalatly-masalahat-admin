import { Button, Popconfirm } from "antd";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { useModal } from "@/shared/hooks";
import { VideoModal } from "../modal";
import { useMediaDeleteMutation } from "@/entities/media";
type Props = {
  item: MediaItemSchema;
  index: number;
};
const VideoRow = ({ item, index }: Props) => {
  const { changeModal } = useModal();
  const { mutate } = useMediaDeleteMutation();
  return (
    <div className="flex items-center gap-5">
      <div className="flex-[0.5] text-center">{index}</div>
      <div className="flex-[3] flex justify-center items-center">
        <img
          src="/test/test1.jpg"
          className="h-24 w-36 rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="flex-[4] break-words ">{item.tm_title}</div>
      <div className="flex-[4] break-words">{item.ru_title}</div>
      <div className="flex-[4] break-words">{item.en_title}</div>
      <div className="flex-[2] flex justify-center items-center">
        <Button
          onClick={() => changeModal(<VideoModal id={item.id} />)}
          type="primary"
        >
          <BiEdit className="text-xl" />
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => mutate(item.id)}
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

export default VideoRow;
