import React from "react";
import ChatContentContainer from "./ui/ChatContainer/ChatContentContainer";
import SendMessageContainer from "./ui/ChatContainer/SendMessageContainer";
import { useMessageStore } from "@/src/stories/useMessageStore";

const ChatContainer = () => {
  const { conversation_id } = useMessageStore();
  return conversation_id ? (
    <div className="w-full h-screen p-5 flex flex-col items-center gap-5">
      <ChatContentContainer />
      <SendMessageContainer />
    </div>
  ) : (
    <div></div>
  );
};

export default ChatContainer;
