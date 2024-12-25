import { Button, Popconfirm } from "antd";

type Props = {
  onClick?: any;
};

const DeleteBtn = ({ onClick }: Props) => {
  return (
    <Popconfirm
      title="Delete"
      description="Are you sure to delete this ?"
      onConfirm={onClick}
      okText="Yes"
      cancelText="No"
    >
      <Button className="w-24" type="primary" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteBtn;
