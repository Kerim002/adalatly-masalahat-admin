import { useState } from "react";
import { VideoModalLeft, VideoModalRight } from "../modalcomponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMediaAddMutation } from "@/entities/media";

const VideoModal = () => {
  const {
    formState: { errors },
    register,
    setValue,
    watch,
    handleSubmit,
  } = useForm();
  const [require, setRequire] = useState(true);
  const { mutate } = useMediaAddMutation();
  const onSubmit: SubmitHandler<any> = (data) => {
    const formdata = new FormData();
    formdata.append("en_title", data.entitle);
    formdata.append("tm_title", data.tmtitle);
    formdata.append("ru_title", data.rutitle);
    formdata.append("video", data.video[0]);
    formdata.append("cover", data.image[0]);
    mutate(formdata);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[900px] h-[500px] flex bg-white p-5 rounded-xl"
    >
      <VideoModalLeft
        oldVideo=""
        errors={errors}
        register={register}
        require={require}
        setRequire={setRequire}
        setValue={setValue}
        watch={watch}
      />
      <VideoModalRight errors={errors} register={register} />
    </form>
  );
};

export default VideoModal;
