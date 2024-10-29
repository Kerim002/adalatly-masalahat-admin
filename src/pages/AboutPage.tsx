import { useAboutQuery, useAboutUpdateMutation } from "@/entities/about";
import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  const { data } = useAboutQuery();
  const { mutate } = useAboutUpdateMutation();
  useEffect(() => {
    if (data) {
      setContent(data.content);
    }
  }, [data]);
  const config = {
    readonly: false, // change to true to make the editor read-only
    placeholder: "Start typing here...",
  };
  return (
    <div className=" flex flex-col gap-2 items-center">
      <h2 className="text-3xl font-medium w-full">Top title</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        // onChange={(newContent) => {}}
      />
      <Button
        onClick={() => mutate({ content, id: 1 })}
        className="w-fit"
        type="primary"
      >
        Change about
      </Button>
    </div>
  );
};

export default AboutPage;
