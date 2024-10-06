import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useState } from "react";
import ReInput from "../inputs/ReInput";
import { Button, Switch } from "antd";

const BannerModal = () => {
  const {
    formState: { errors },
    register,
    setValue,
    watch,
    control,
    handleSubmit,
  } = useForm();
  const [require, setRequire] = useState(true);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-8 py-8 flex flex-col gap-4 w-96 h-72 rounded-2xl"
    >
      <ImageInput
        setRequire={setRequire}
        oldImage=""
        errors={errors}
        register={register}
        require={require}
        setValue={setValue}
        watch={watch}
      />
      <ReInput
        errmessage=""
        errors={errors}
        keyname="link"
        name="Banner link"
        register={register}
        type="text"
      />
      <div className="flex w-full gap-2">
        <p>Is active</p>
        <Controller
          name="isActive"
          control={control}
          rules={{
            required: false,
          }}
          render={({ field }) => (
            <Switch
              {...field}
              checked={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </div>
      <Button htmlType="submit" type="primary">
        Add
      </Button>
    </form>
  );
};

export default BannerModal;
