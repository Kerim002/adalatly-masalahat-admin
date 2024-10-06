import { DeleteBtn, EditBtn } from "../../shared";

const VideoRow = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex-[0.5] text-center">1</div>
      <div className="flex-[3] flex justify-center items-center">
        <img
          src="/test/test1.jpg"
          className="h-24 w-36 rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="flex-[4] break-words">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque at,
      </div>
      <div className="flex-[4] break-words">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        earum a corrupti cupiditate animi? Voluptates quas quasi blanditiis ex,
        nihil similique aliquam, iure veniam tempora dolore asperiores id alias
        dolores.
      </div>
      <div className="flex-[4] break-words">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit porro
        sunt totam et iure labore deleniti? Debitis praesentium minima doloribus
        non molestias iusto. Impedit doloribus at provident voluptatum? Maiores,
        nisi?
      </div>
      <div className="flex-[2] flex justify-center items-center">
        <EditBtn />
        <DeleteBtn />
      </div>
    </div>
  );
};

export default VideoRow;
