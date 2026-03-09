import React from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { suggestMessage } from "@/lib/data";
import { useSystemStore } from "@/src/stories/useSystemStore";

const HiddenSuggestButton = () => {
  const { setIsOpenSuggest } = useSystemStore();

  return (
    <div className="flex gap-2 items-center">
      {suggestMessage.map((el) => (
        <div
          key={el.id}
          className="border border-black px-4 py-2 rounded-lg hover:cursor-pointer active:scale-95"
        >
          <span>{el.content}</span>
        </div>
      ))}
      <div
        className="flex gap-2 items-center py-2 px-4 hover:bg-(--cb-hover-primary) rounded-lg hover:cursor-pointer active:scale-95 border boder-(--bg-border-primary)"
        onClick={() => setIsOpenSuggest()}
      >
        <GrSubtractCircle size={20} />
        <span>Ẩn gợi ý</span>
      </div>
    </div>
  );
};

export default HiddenSuggestButton;
