import AdminMessage from "@/entities/chat/ui/AdminMessage";
import ClientMessage from "@/entities/chat/ui/ClientMessage";
import { useState } from "react";
import { BiSend } from "react-icons/bi";

const SingleChat = () => {
  const [message, setMessage] = useState("");

  // Handle send action
  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className=" relative w-full h-[calc(100vh-5rem)]">
      <div className="h-[calc(100vh-8rem)] px-20 flex flex-col gap-5 py-4 pb-8 overflow-auto">
        <AdminMessage />
        <ClientMessage />
        <AdminMessage />
        <ClientMessage />
        <AdminMessage />
        <ClientMessage />
      </div>
      <div className="absolute bg-white bottom-0  h-12 flex  justify-center left-0 right-0 px-5 items-center gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          type="text"
          placeholder="Sizin hatynyz"
          className="w-[65%] focus:outline-none border focus:border-blue-400 transition-colors border-gray-500 px-4 py-3 rounded-full"
        />
        <button className="h-full w-16 bg-green-500 text-white flex items-center justify-center rounded-full">
          <BiSend className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SingleChat;
