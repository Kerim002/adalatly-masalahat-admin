import { useBannerDeleteMutation } from "@/entities/banner";
import { useModal } from "@/shared/hooks/useModal";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { BannerModal } from "..";

type Props = {
  banner: BannerSchema;
};
const BannerCard = ({ banner }: Props) => {
  const { mutate } = useBannerDeleteMutation();
  const { changeModal } = useModal();
  return (
    <div
      className={`rounded-2xl overflow-hidden  shadow-lg shadow-gray-300 flex flex-col ${
        !banner.is_active && "opacity-50"
      }`}
    >
      <img src={banner?.image} className="object-cover w-full  h-44" alt="" />
      <div className="flex items-center px-4">
        Link:
        <Link to={banner?.link} target="_blank">
          <Button className="text-lg" type="link">
            {banner?.link ?? "link yok"}
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-center gap-3 py-3">
        <Button
          onClick={() => changeModal(<BannerModal id={banner.id} />)}
          className="w-32"
          type="primary"
        >
          Edit
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => mutate(banner.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-32" type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default BannerCard;
