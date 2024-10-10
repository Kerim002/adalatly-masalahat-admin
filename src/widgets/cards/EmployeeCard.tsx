import { Button } from "antd";

type Props = {
  item: EmployerItemSchema;
};
const EmployeeCard = ({ item }: Props) => {
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
        <Button className="w-24" type="primary">
          Edit
        </Button>
        <Button className="w-24" danger type="primary">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EmployeeCard;
