import React from "react";

import { FaRegFileAlt } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

import { useSystemStore } from "@/src/stories/useSystemStore";
import SuggestButton from "./SuggestButton";
import HiddenSuggestButton from "./HiddenSuggestButton";

const SendMessageContainer = () => {
  const { isOpenSuggest, isOpenFileContainer, setIsOpenFileContainer } =
    useSystemStore();
  return (
    <div className="h-fit w-2/3 bg-(--cb-bg-primary) flex flex-col rounded-3xl text-sm text-black p-5 gap-2 border border-(--cb-border-primary)">
      {/* Các nút tương tác */}
      <div className="flex gap-2">
        {!isOpenSuggest ? <SuggestButton /> : <HiddenSuggestButton />}
        {!isOpenFileContainer && (
          <div
            className="flex gap-2 items-center py-2 px-4 hover:bg-(--cb-hover-primary) rounded-lg hover:cursor-pointer active:scale-95 border boder-(--bg-border-primary)"
            onClick={() => setIsOpenFileContainer()}
          >
            <FaRegFileAlt size={20} />
            <span>Tệp tin</span>
          </div>
        )}
      </div>
      {/* Soạn và gửi tin nhắn */}
      <div className="flex items-center gap-5">
        <div className="w-full bg-white rounded-lg">
          <textarea
            rows={1}
            onInput={(e) => {
              const target = e.currentTarget;
              target.style.height = "auto";
              target.style.height = Math.min(target.scrollHeight, 120) + "px";
            }}
            className="w-full resize-none overflow-y-auto outline-none p-3"
            placeholder="Nhập tin nhắn..."
          />
        </div>
        {/* Nút gửi tin nhắn */}
        <div className="p-2 h-fit bg-(--deepskyblue) rounded-lg active:scale-95">
          <BsSendFill color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SendMessageContainer;
