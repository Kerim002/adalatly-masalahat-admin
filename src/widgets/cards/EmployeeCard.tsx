import { useEmployerDeleteMutation } from "@/entities/employer/api/useEmployerDeleteMutation";
import { Button, Popconfirm } from "antd";

type Props = {
  item: EmployerItemSchema;
};
const EmployeeCard = ({ item }: Props) => {
  const { mutate } = useEmployerDeleteMutation();
  return (
    <div className="flex flex-col items-center gap-1 justify-center ">
      <div className="w-32 h-32 ">
        <img
          src={item.image}
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <h3 className="text-lg font-semibold">{item.surname}</h3>
      <div className="flex gap-3">
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => mutate(String(item.id))}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-24" type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
        <Button className="w-24" type="primary">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EmployeeCard;
