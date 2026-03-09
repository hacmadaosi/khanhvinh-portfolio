"use client";

import { LuPanelLeftClose } from "react-icons/lu";
import { RiChatNewLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import ConversationCardView from "./ui/SlideBar/ConversationCardView";
import { useSystemStore } from "@/src/stories/useSystemStore";
import MoreOption from "./ui/SlideBar/MoreOption";
import { useMessageStore } from "@/src/stories/useMessageStore";
import { users } from "@/lib/data";

const SlideBar = () => {
  const {
    isOpenSlideBar,
    setIsOpenSlideBar,
    isOpenInforOption,
    setIsOpenInforOption,
  } = useSystemStore();
  const { getAllConversation } = useMessageStore();

  const getUser = () => {
    return users.find((u) => u.id === "u001");
  };

  return (
    <div
      className={cn(
        "select-none h-screen w-2/12 flex flex-col gap-5 p-5 text-black transition-all duration-300 border-r border-(--cb-border-primary) bg-(--cb-bg-primary) ",
        !isOpenSlideBar && "w-fit items-center",
      )}
    >
      {/* Biểu tượng */}
      <div className="flex justify-between items-center">
        {isOpenSlideBar && (
          <span className="text-black font-bold">E-AI Agent</span>
        )}
        <LuPanelLeftClose
          className={cn(
            "cursor-pointer transition-all duration-300",
            !isOpenSlideBar && "rotate-180",
          )}
          size={24}
          onClick={() => setIsOpenSlideBar()}
        />
      </div>

      <div className="h-px w-full bg-black"></div>
      {/* Nút tạo cuộc hội thoại mới */}
      <div
        className={cn(
          "w-full flex justify-center py-2 bg-(--deepskyblue) text-white rounded-sm text-sm cursor-pointer active:scale-95",
          !isOpenSlideBar && "px-2",
        )}
      >
        <div className="flex gap-2 items-center">
          <RiChatNewLine size={24} />
          {isOpenSlideBar && <span>Hội thoại mới</span>}
        </div>
      </div>
      <div className="h-px w-full bg-(--cb-border-primary)"></div>
      <div></div>
      {isOpenSlideBar && (
        <div>
          <div className="mb-2">
            <span className="font-medium">LỊCH SỬ HỘI THOẠI</span>
          </div>
          <div>
            {getAllConversation("123e4567-e89b-12d3-a456-426614174000").map((item) => (
              <ConversationCardView
                key={item.id}
                _id={item.id}
                name={item.name}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="w-6 h-6"
              src={getUser()?.image_url}
              alt="ảnh đại diện"
            />
            {isOpenSlideBar && (
              <span className="text-sm">{getUser()?.name}</span>
            )}
          </div>
          {isOpenSlideBar && (
            <FaAngleDown
              className={cn(
                "hover:cursor-pointer rotate-180",
                isOpenInforOption && "rotate-0",
              )}
              onClick={() => setIsOpenInforOption()}
            />
          )}
        </div>
        {isOpenInforOption && <MoreOption />}
      </div>
    </div>
  );
};

export default SlideBar;
