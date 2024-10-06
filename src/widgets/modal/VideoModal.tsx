import { VideoModalLeft, VideoModalRight } from "../modalcomponents";

const VideoModal = () => {
  return (
    <div className="w-[900px] h-[500px] bg-white p-5 rounded-xl">
      <VideoModalLeft />
      <VideoModalRight />
    </div>
  );
};

export default VideoModal;
