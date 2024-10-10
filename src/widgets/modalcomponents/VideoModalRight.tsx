import { FieldErrors, UseFormRegister } from "react-hook-form";
import ReTextArea from "../inputs/ReTextArea";
import { Button } from "antd";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const VideoModalRight = ({ errors, register }: Props) => {
  return (
    <div className="flex-1 flex-col flex gap-5 justify-center">
      <ReTextArea
        errmessage="Title required"
        errors={errors}
        register={register}
        keyname="tmtitle"
        name="Turkmence"
      />
      <ReTextArea
        errmessage="Title required"
        errors={errors}
        register={register}
        keyname="rutitle"
        name="Russian"
      />
      <ReTextArea
        errmessage="Title required"
        errors={errors}
        register={register}
        keyname="entitle"
        name="English"
      />
      <Button htmlType="submit" type="primary">
        Add Video
      </Button>
    </div>
  );
};

export default VideoModalRight;
