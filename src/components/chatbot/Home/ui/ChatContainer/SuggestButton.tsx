import { useSystemStore } from "@/src/stories/useSystemStore";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const SuggestButton = () => {
    const {setIsOpenSuggest} = useSystemStore()
  return (
    <div
      className="flex gap-2 items-center py-2 px-4 hover:bg-(--cb-hover-primary) rounded-lg hover:cursor-pointer active:scale-95 border boder-(--bg-border-primary)"
      onClick={() => setIsOpenSuggest()}
    >
      <IoMdAddCircleOutline size={20} />
      <span>Gợi ý hội thoại</span>
    </div>
  );
};

export default SuggestButton;
