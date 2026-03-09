import React from "react";
import ShowMessageContainer from "./ShowMessageContainer";
import FileContainer from "./FileContainer";
import { useSystemStore } from "@/src/stories/useSystemStore";

const ChatContentContainer = () => {
  const { isOpenFileContainer } = useSystemStore();

  return (
    <div className="w-full h-full flex gap-5">
      <ShowMessageContainer />
      {isOpenFileContainer && <FileContainer />}
    </div>
  );
};

export default ChatContentContainer;
