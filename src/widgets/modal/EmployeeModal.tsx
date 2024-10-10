import { SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useState } from "react";
import ReInput from "../inputs/ReInput";
import { Button } from "antd";
import { useEmployerAdd } from "@/entities/employer";

const EmployeeModal = () => {
  const {
    watch,
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [require, setRequire] = useState(true);
  const { mutate } = useEmployerAdd();
  const onSubmit: SubmitHandler<any> = (data) => {
    const formdata = new FormData();
    formdata.append("image", data.image[0]);
    formdata.append("surname", data.surname);
    formdata.append("name", data.name);
    formdata.append("major", data.major);
    console.log(data.image[0]);
    mutate(formdata);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[450px] px-5 py-8 bg-white rounded-2xl flex flex-col gap-6"
    >
      <ImageInput
        errors={errors}
        register={register}
        require={require}
        setRequire={setRequire}
        setValue={setValue}
        watch={watch}
      />
      <ReInput
        errmessage="Name is required"
        errors={errors}
        keyname="name"
        name="Name"
        register={register}
        type="text"
      />
      <ReInput
        errmessage="Surname is required"
        errors={errors}
        keyname="surname"
        name="Surname"
        register={register}
        type="text"
      />
      <ReInput
        errmessage="Major is required"
        errors={errors}
        keyname="major"
        name="Major"
        register={register}
        type="text"
      />
      <Button htmlType="submit" type="primary">
        Add employee
      </Button>
    </form>
  );
};

export default EmployeeModal;
