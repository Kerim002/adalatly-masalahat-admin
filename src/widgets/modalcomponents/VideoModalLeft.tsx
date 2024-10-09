import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  oldImage?: string;
  require: boolean;
  setValue: UseFormSetValue<any>;
  setRequire: any;
};

const VideoModalLeft = ({}) => {
  return <div className="flex-1">{/* <ImageInput errors={} /> */}</div>;
};

export default VideoModalLeft;
