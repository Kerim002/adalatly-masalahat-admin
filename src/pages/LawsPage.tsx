import { useLawListQuery } from "@/entities/laws";
import { useDeleteLawMutation } from "@/entities/laws/api/useDeleteLaw";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const LawsPage = () => {
  const { mutate: deleteLaw } = useDeleteLawMutation();

  const { data: lawList } = useLawListQuery();
  const handleDelete = (id: number) => {
    deleteLaw(Number(id));
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <h1 className="text-center h-16 py-2 font-semibold text-4xl">Kanunlar</h1>
      <div className="xl:w-[80%] overflow-auto h-[calc(100vh-8rem)] w-full m-auto pb-10">
        {lawList?.data?.map((item, index) => (
          <div className="border-b text-xl font-medium py-2 px-1 border-black flex items-center justify-between">
            <Link key={item.id} to={`${item.id}`}>
              <p>
                {index * lawList?.page + 1}. {" " + item.title}
              </p>
            </Link>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this ?"
              onConfirm={() => handleDelete(item.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button className="w-24" type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawsPage;
