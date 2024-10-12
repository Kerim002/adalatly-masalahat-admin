import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useEffect, useState } from "react";
import ReInput from "../inputs/ReInput";
import { Button, Switch } from "antd";
import { useBannerIdQuery } from "@/entities/banner";
import { UseQueryResult } from "@tanstack/react-query";
import { useBannerCreateMutation } from "@/entities/banner/api/useBannerCreateMutation";
import { VscLoading } from "react-icons/vsc";
import { useModal } from "@/shared/hooks/useModal";
import { useBannerUpdateMutation } from "@/entities/banner/api/useBannerUpdateMutation";
type Props = {
  id?: number;
};
const BannerModal = ({ id }: Props) => {
  let result = null as UseQueryResult<BannerSchema, Error> | null;
  const { mutate: createBanner, isPending: createLoading } =
    useBannerCreateMutation();
  const { mutate: updateBanner, isPending: updateLoading } =
    useBannerUpdateMutation();

  const { close } = useModal();

  const {
    formState: { errors },
    register,
    setValue,
    watch,
    control,
    handleSubmit,
  } = useForm();
  const [require, setRequire] = useState(true);
  if (id) result = useBannerIdQuery(id);
  const onSubmit: SubmitHandler<any> = (data) => {
    const body = new FormData();
    if (data.image && data.image[0] instanceof File) {
      body.append("bannerimg", data.image[0]);
    }

    body.append("link", data.link);
    body.append("is_active", data.isActive ? "true" : "false");
    if (id) {
      updateBanner({ id: id, body }, { onSuccess: () => close() });
    } else {
      // createBanner(body, { onSuccess: () => close() });
      createBanner(body);
    }
  };
  useEffect(() => {
    if (result) {
      setValue("id", result?.data?.id);
      setValue("link", result?.data?.link);
      setValue("isActive", result?.data?.is_active);
      setRequire(false);
    }
  }, [result]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-8 py-8 flex flex-col gap-4 w-96 h-72 rounded-2xl"
    >
      {result?.isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <VscLoading className="animate-spin" />
        </div>
      ) : (
        <>
          <ImageInput
            setRequire={setRequire}
            oldImage={result?.data?.image ?? ""}
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
          <Button
            loading={createLoading || updateLoading}
            htmlType="submit"
            type="primary"
          >
            {id ? "Update" : "Add"}
          </Button>
        </>
      )}
    </form>
  );
};

export default BannerModal;
