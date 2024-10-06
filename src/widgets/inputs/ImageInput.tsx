import { useMemo, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  oldImage?: string;
  require: boolean;
  setValue: UseFormSetValue<any>;
  setRequire: any;
};

const ImageInput = ({
  errors,
  register,
  watch,
  oldImage,
  require,
  setValue,
  setRequire,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const image = watch("image");
  const imageURL = useMemo(() => {
    return image && image[0] ? URL.createObjectURL(image[0]) : null;
  }, [image]);
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setRequire(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setValue("image", files);
    }
  };

  return (
    <div
      className={`flex flex-col items-center relative pb-4 ${
        isDragging ? "bg-blue-100" : ""
      }`}
    >
      <div
        className={`w-32 h-20 border-dashed border-gray-500 border-2 rounded ${
          isDragging ? "border-blue-500" : ""
        }`}
      >
        <input
          accept="image/png, image/jpeg, image/jpg, image/gif, image/tiff, image/bmp, image/webp"
          {...register("image", {
            required: {
              value: require,
              message: "Image is required",
            },
            validate: {
              lessThan512KB: (files) =>
                !files[0] ||
                files[0]?.size / 1024 < 512 ||
                "File size should be less than 512KB",
            },
          })}
          type="file"
          id="image"
          className="hidden"
        />
        <label
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          htmlFor="image"
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          {imageURL ? (
            <img src={imageURL} className="w-full h-full object-cover" />
          ) : oldImage ? (
            <img src={oldImage} className="w-full h-full object-cover" />
          ) : (
            <MdOutlineAddPhotoAlternate size={30} className="text-gray-500" />
          )}
        </label>
      </div>
      {errors.image && (
        <p className="text-red-500 text-xs text-center absolute -bottom-4">
          {String(errors.image.message)}
        </p>
      )}
    </div>
  );
};

export default ImageInput;
