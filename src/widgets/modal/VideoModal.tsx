import { useEffect, useState } from "react";
import { VideoModalLeft, VideoModalRight } from "../modalcomponents";
import { useMediaAddMutation } from "@/entities/media";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMediaIdQuery } from "@/entities/media/api/useMediaIdQuery";
import { UseQueryResult } from "@tanstack/react-query";
import { useModal } from "@/shared/hooks";

type Props = {
  id?: number;
};
const VideoModal = ({ id }: Props) => {
  const { close } = useModal();
  let result = null as UseQueryResult<MediaItemSchema, Error> | null;
  if (id) {
    result = useMediaIdQuery(id);
  }
  const {
    formState: { errors },
    register,
    setValue,
    watch,
    handleSubmit,
  } = useForm();
  useEffect(() => {
    if (result) {
      setValue("id", result?.data?.id);
      setValue("tmtitle", result?.data?.tm_title);
      setValue("rutitle", result?.data?.ru_title);
      setValue("entitle", result?.data?.en_title);
      setRequire(false);
    }
  }, [result]);
  const [require, setRequire] = useState(true);
  const { mutate } = useMediaAddMutation();
  const onSubmit: SubmitHandler<any> = (data) => {
    const formdata = new FormData();
    formdata.append("en_title", data.entitle);
    formdata.append("tm_title", data.tmtitle);
    formdata.append("ru_title", data.rutitle);
    formdata.append("video", data.video[0]);
    formdata.append("cover", data.image[0]);
    mutate(formdata, {
      onSuccess: () => {
        close();
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[900px] h-[500px] flex bg-white p-5 rounded-xl"
    >
      <VideoModalLeft
        oldVideo={result?.data?.video ?? ""}
        oldImage={result?.data?.cover ?? ""}
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
