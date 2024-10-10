import { SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useState } from "react";
import ReInput from "../inputs/ReInput";
import ReTextArea from "../inputs/ReTextArea";
import { Button } from "antd";

const NewsModal = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm();
  const [state, setRequire] = useState(true);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
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
      <Button htmlType="submit" type="primary">
        Add News
      </Button>
    </form>
  );
};

export default NewsModal;
