import { useMediaIdQuery } from "@/entities/media";
import { UseQueryResult } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import ReInput from "../inputs/ReInput";
import { Button } from "antd";

type Props = {
  id?: number;
};
const VideoModal = ({ id }: Props) => {
  let result = null as UseQueryResult<MediaItemSchema, Error> | null;
  if (id) {
    result = useMediaIdQuery(id);
  }
  const {
    formState: { errors },
    register,
    setValue,
    watch,
    control,
    handleSubmit,
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (result) {
      setValue("id", result?.data?.id);
      setValue("tm_title", result?.data?.tm_title);
      setValue("ru_title", result?.data?.ru_title);
      setValue("en_title", result?.data?.en_title);
    }
  }, [result]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[900px] h-[500px] flex bg-white p-5 rounded-xl"
    >
      <div className="flex flex-col gap-3">
        <ReInput
          errmessage=""
          errors={errors}
          keyname="tm_title"
          name="Tm Title"
          register={register}
          type="text"
        />
        <ReInput
          errmessage=""
          errors={errors}
          keyname="en_title"
          name="Rn Title"
          register={register}
          type="text"
        />
        <ReInput
          errmessage=""
          errors={errors}
          keyname="ru_title"
          name="Ru Title"
          register={register}
          type="text"
        />
      </div>
      {/* <VideoModalLeft />
      <VideoModalRight /> */}
      <Button htmlType="submit" type="primary">
        {"Add"}
      </Button>
    </form>
  );
};

export default VideoModal;
