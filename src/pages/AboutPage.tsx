import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const AboutPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  const config = {
    readonly: false,
    placeholder: "Start typing here...",
  };
  return (
    <div className="p-4  max-h-[80vh] overflow-auto">
      <JoditEditor
        className=""
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        // onChange={(newContent) => {}}
      />
    </div>
  );
};

export default AboutPage;
