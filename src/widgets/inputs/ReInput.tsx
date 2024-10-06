import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  errmessage: string;
  name: string;
  type: HTMLInputTypeAttribute;
  keyname: string;
  disabled?: boolean;
  minlength?: {
    value: number;
    message: string;
  };
};

const ReInput = ({
  errors,
  register,
  errmessage,
  name,
  type,
  disabled,
  keyname,
  minlength,
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        {...register(keyname, {
          required: {
            value: errmessage.length ? true : false,
            message: errmessage,
          },
          minLength: {
            value: minlength?.value ?? 0,
            message: minlength?.message ?? "",
          },
        })}
        type={type}
        placeholder=" "
        className="p-1 px-2 border border-gray-300 focus:outline-blue-300 rounded w-full peer "
        id={name}
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="absolute left-1 px-2 capitalize bg-white -top-2 text-gray-600 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[5px] peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:left-3 peer-focus:bg-white"
      >
        {name}
      </label>
      {errors[keyname] && (
        <p className="text-red-500 text-xs absolute left-0  w-full truncate  ">
          {errors[keyname]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default ReInput;
