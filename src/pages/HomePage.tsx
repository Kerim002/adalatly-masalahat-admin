import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const HomePage = () => {
  const editorTop = useRef(null);
  const editorBottom = useRef(null);
  const [contentTop, setContentTop] = useState<string>("");
  const [contentBottom, setContentBottom] = useState<string>("");
  const config = {
    readonly: false, // change to true to make the editor read-only
    placeholder: "Start typing here...",
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[90vh] ">
      <div className=" flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-medium w-full">Top title</h2>
        <JoditEditor
          ref={editorTop}
          value={contentTop}
          config={config}
          onBlur={(newContent) => setContentTop(newContent)}
          // onChange={(newContent) => {}}
        />
        <Button className="w-fit" type="primary">
          Change top title
        </Button>
      </div>
      <div className=" flex flex-col gap-2 items-center">
        <h2 className="w-full text-3xl font-medium ">Bottom title</h2>
        <JoditEditor
          className=""
          ref={editorBottom}
          value={contentBottom}
          config={config}
          onBlur={(newContent) => setContentBottom(newContent)}
          // onChange={(newContent) => {}}
        />
        <Button className="w-fit" type="primary">
          Change top title
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
