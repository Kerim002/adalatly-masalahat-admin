import { useMemo } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { BiVideo } from "react-icons/bi";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  oldVideo?: string;
  setValue: UseFormSetValue<any>;
};
const VideoInput = ({ errors, register, watch, oldVideo }: Props) => {
  const video = watch("video");
  const videoURL = useMemo(() => {
    return video && video[0] ? URL.createObjectURL(video[0]) : null;
  }, [video]);
  return (
    <div className="w-[350px] h-[225px] border border-gray-400 flex flex-col items-center justify-center  rounded-2xl relative">
      {videoURL ? (
        <div className="w-[350px] h-[225px]">
          <video
            className="w-full h-full object-cover rounded-2xl"
            controls
            src={videoURL}
          />
        </div>
      ) : oldVideo ? (
        <video
          className="w-[350px] h-[225px] object-cover rounded-2xl"
          controls
          src={oldVideo}
        />
      ) : (
        <BiVideo className="text-5xl" />
      )}
      <input
        type="file"
        accept="video/*"
        {...register("video", {
          required: {
            value: oldVideo ? false : true,
            message: "Video is required",
          },
        })}
        id="modalvideo"
        className="hidden"
      />
      {errors.video && (
        <p className="text-red-500 text-xs text-center absolute -bottom-4">
          {String(errors?.video.message)}
        </p>
      )}
      <label
        htmlFor="modalvideo"
        className="bg-blue-500 absolute -bottom-14 py-1 px-3 rounded text-white"
      >
        Choose video
      </label>
    </div>
  );
};

export default VideoInput;
