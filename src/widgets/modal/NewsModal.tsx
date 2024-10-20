import { SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useState } from "react";
import ReInput from "../inputs/ReInput";
import ReTextArea from "../inputs/ReTextArea";
import { Button } from "antd";
import { useAddNews } from "@/entities/news/api/useAddNews";
import { useModal } from "@/shared/hooks";

const NewsModal = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm();
  const [state, setRequire] = useState(true);
  const { mutate } = useAddNews();
  const { close } = useModal();

  const onSubmit: SubmitHandler<any> = (data) => {
    const formData = new FormData();
    formData.append("tm_title", data.tmtitle);
    formData.append("en_title", data.entitle);
    formData.append("ru_title", data.rutitle);
    formData.append("tm_description", data.tmdesc);
    formData.append("en_description", data.endesc);
    formData.append("ru_description", data.rudesc);
    formData.append("news", data.image[0]);
    mutate(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl flex-col flex justify-center w-[600px] gap-5"
    >
      <ImageInput
        errors={errors}
        require={state}
        oldImage=""
        watch={watch}
        register={register}
        setValue={setValue}
        setRequire={setRequire}
      />
      <ReInput
        errmessage="Title is required"
        errors={errors}
        keyname="tmtitle"
        name="Turkmen title"
        register={register}
        type="text"
      />
      <ReTextArea
        errmessage="Description is required"
        errors={errors}
        keyname="tmdesc"
        name="Turkmen description"
        register={register}
      />
      <ReInput
        errmessage="Title is required"
        errors={errors}
        keyname="entitle"
        name="English title"
        register={register}
        type="text"
      />
      <ReTextArea
        errmessage="Description is required"
        errors={errors}
        keyname="endesc"
        name="English description"
        register={register}
      />
      <ReInput
        errmessage="Title is required"
        errors={errors}
        keyname="rutitle"
        name="Russian title"
        register={register}
        type="text"
      />
      <ReTextArea
        errmessage="Description is required"
        errors={errors}
        keyname="rudesc"
        name="Russian description"
        register={register}
      />
      <Button htmlType="submit" type="primary">
        Add News
      </Button>
    </form>
  );
};

export default NewsModal;
