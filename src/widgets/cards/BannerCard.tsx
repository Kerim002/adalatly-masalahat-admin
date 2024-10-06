import { Button } from "antd";
import { Link } from "react-router-dom";

const BannerCard = () => {
  return (
    <div className=" rounded-2xl overflow-hidden  shadow-lg shadow-gray-300 flex flex-col">
      <img src="/test/photo.png" className="object-cover w-full  h-44" alt="" />
      <div className="flex items-center px-4">
        Link:
        <Link to="test">
          <Button className="text-lg" type="link">
            Banner Path
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-center gap-3 py-3">
        <Button className="w-32" type="primary">
          Edit
        </Button>
        <Button className="w-32" type="primary" danger>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BannerCard;
