import { SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useEffect, useState } from "react";
import ReInput from "../inputs/ReInput";
import { Button } from "antd";
import {
  useEmployerAdd,
  useEmployerIdQuery,
  useEmployerUpdate,
} from "@/entities/employer";
import { UseQueryResult } from "@tanstack/react-query";
import { useModal } from "@/shared/hooks";
type Props = {
  id?: number;
};
const EmployeeModal = ({ id }: Props) => {
  let result = null as UseQueryResult<EmployerItemSchema, Error> | null;
  const { mutate: createEmployer } = useEmployerAdd();
  const { mutate: updateEmployer } = useEmployerUpdate();
  if (id) result = useEmployerIdQuery(id);
  const {
    watch,
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { close } = useModal();

  const [require, setRequire] = useState(true);
  const onSubmit: SubmitHandler<any> = (data) => {
    const body = new FormData();
    if (data.image && data.image[0] instanceof File) {
      body.append("employer", data.image[0]);
    }
    body.append("surname", data.surname);
    body.append("name", data.name);
    body.append("major", data.major);
    if (id) {
      updateEmployer({ id: id, data: body }, { onSuccess: () => close() });
    } else {
      createEmployer(body, { onSuccess: () => close() });
    }
  };

  useEffect(() => {
    if (result) {
      setValue("id", result?.data?.id);
      setValue("name", result?.data?.name);
      setValue("surname", result?.data?.surname);
      setValue("major", result?.data?.major);
      setRequire(false);
    }
  }, [result]);

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
        oldImage={result?.data?.image ?? ""}
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
        {id ? "Update employee" : "Add employee"}
      </Button>
    </form>
  );
};

export default EmployeeModal;
