import {
  useAddLawMutation,
  useLawByIdQuery,
  useLawUpdateMutation,
} from "@/entities/laws";
import ReInput from "@/widgets/inputs/ReInput";
import { UseQueryResult } from "@tanstack/react-query";
import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const SingleLaw = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  let result = null as UseQueryResult<LawItemSchema, Error> | null;
  if (id) {
    result = useLawByIdQuery(id);
  }
  const [content, setContent] = useState("");
  const { mutate: addLaw } = useAddLawMutation();
  const { mutate: updateLaw } = useLawUpdateMutation();

  const {
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = useForm();
  useEffect(() => {
    if (result) {
      setContent(result?.data?.laws ?? "");
      setValue("title", result?.data?.title);
      setValue("id", result?.data?.id);
    }
  }, [result?.data?.id]);
  const onSubmit: SubmitHandler<any> = (data) => {
    if (result) {
      updateLaw({ laws: content, ...data });
    } else {
      const { id, ...body } = data;
      addLaw(
        { laws: content, ...body },
        { onSuccess: () => navigate("/laws") }
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4  max-h-[80vh] overflow-auto"
    >
      <div className="flex w-full justify-between mb-5 gap-5">
        <ReInput
          errmessage=""
          errors={errors}
          keyname="title"
          name="Title"
          register={register}
          type="text"
        />
        <Button className="w-24" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
      <JoditEditor
        value={content}
        onBlur={(newContent) => {
          setContent(newContent);
          setValue("laws", newContent);
        }}
        className="jodit-editor"
        config={{
          readonly: false,
        }}
      />
    </form>
  );
};

export default SingleLaw;
