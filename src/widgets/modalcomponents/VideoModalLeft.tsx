import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import VideoInput from "../inputs/VideoInput";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  oldImage?: string;
  require: boolean;
  setValue: UseFormSetValue<any>;
  setRequire: any;
  oldVideo?: string;
};

const VideoModalLeft = ({
  errors,
  register,
  require,
  setRequire,
  setValue,
  watch,
  oldImage,
  oldVideo,
}: Props) => {
  return (
    <div className="flex-1 items-center flex flex-col justify-center gap-2">
      <ImageInput
        watch={watch}
        oldImage={oldImage}
        errors={errors}
        register={register}
        require={require}
        setRequire={setRequire}
        setValue={setValue}
      />
      <VideoInput
        errors={errors}
        setValue={setValue}
        watch={watch}
        oldVideo={oldVideo}
        register={register}
      />
    </div>
  );
};

export default VideoModalLeft;
