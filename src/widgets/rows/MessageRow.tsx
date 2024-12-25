import { Button } from "antd";
import { Link } from "react-router-dom";

const MessageRow = () => {
  return (
    <Link to="12">
      <div className="flex items-center">
        <div className="flex-1 text-center">1</div>
        <div className="flex-[4] text-center">00302-323232-3232-3545-43434</div>
        <div className="flex-[6] break-words px-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          fugit, voluptates perferendis sunt illum expedita fugiat cupiditate
          qui ipsum explicabo, repellat deserunt minus, molestias itaque
          consequatur voluptate vero aut maxime!
        </div>
        <div className="flex-[2] flex items-center justify-center">
          {/* <Button type="primary">Taze</Button> */}
          <Button type="primary" danger>
            Kone
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MessageRow;
