import { Button, Popover } from "antd";
import { TbTrash } from "react-icons/tb";

const DeleteBtn = () => {
  return (
    <Popover>
      <Button danger type="primary">
        <TbTrash className="text-xl" />
      </Button>
    </Popover>
  );
};

export default DeleteBtn;
