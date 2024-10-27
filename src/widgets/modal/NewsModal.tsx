import { SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../inputs/ImageInput";
import { useEffect, useState } from "react";
import ReInput from "../inputs/ReInput";
import ReTextArea from "../inputs/ReTextArea";
import { Button } from "antd";
import { useAddNews } from "@/entities/news/api/useAddNews";
import { useModal } from "@/shared/hooks";
import { UseQueryResult } from "@tanstack/react-query";
import { useNewsQueryById } from "@/entities/news/api/useNewsIdQuery";
import { useNewsUpdateMutation } from "@/entities/news/api/useUpdateNews";
type Props = {
  id?: number;
};
const NewsModal = ({ id }: Props) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm();
  const [state, setRequire] = useState(true);
  const { mutate: addNews, isPending: addLoading } = useAddNews();
  const { mutate: updateNews, isPending: updateLoading } =
    useNewsUpdateMutation();
  const { close } = useModal();
  let result = null as UseQueryResult<NewsItemSchema, Error> | null;
  if (id) {
    result = useNewsQueryById(id);
  }

  useEffect(() => {
    if (result) {
      setValue("id", result?.data?.id);
      setValue("tmtitle", result?.data?.tm_title);
      setValue("rutitle", result?.data?.ru_title);
      setValue("entitle", result?.data?.en_title);
      setValue("tmdesc", result?.data?.tm_description);
      setValue("rudesc", result?.data?.ru_description);
      setValue("endesc", result?.data?.en_description);
      setRequire(false);
    }
  }, [result]);

  const onSubmit: SubmitHandler<any> = (data) => {
    const formData = new FormData();
    formData.append("tm_title", data.tmtitle);
    formData.append("en_title", data.entitle);
    formData.append("ru_title", data.rutitle);
    formData.append("tm_description", data.tmdesc);
    formData.append("en_description", data.endesc);
    formData.append("ru_description", data.rudesc);
    data.image[0] && formData.append("news", data.image[0]);
    if (result) {
      updateNews(
        { media: formData, id: result.data?.id },
        {
          onSuccess: () => {
            close();
          },
        }
      );
    } else {
      addNews(formData, {
        onSuccess: () => {
          close();
        },
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl flex-col flex justify-center w-[600px] gap-5"
    >
      <ImageInput
        errors={errors}
        require={state}
        oldImage={result?.data?.image ?? ""}
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
      <Button
        loading={addLoading || updateLoading}
        htmlType="submit"
        type="primary"
      >
        {id ? "Update news" : "Add news"}
      </Button>
    </form>
  );
};

export default NewsModal;
