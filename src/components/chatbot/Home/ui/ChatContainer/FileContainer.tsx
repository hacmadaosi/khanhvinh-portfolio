import { useMessageStore } from "@/src/stories/useMessageStore";
import { useSystemStore } from "@/src/stories/useSystemStore";
import React from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import FileCard from "./FileCard";

const FileContainer = () => {
  const { setIsOpenFileContainer } = useSystemStore();
  const { getMessageByConversationId } = useMessageStore();
  return (
    <div className="bg-(--cb-bg-primary) h-full w-2/6 rounded-3xl border border-(--cb-border-primary) text-black text-sm p-4 flex flex-col gap-5">
      <div className="w-full py-2 flex items-center justify-center bg-(--deepskyblue) text-white rounded-lg active:scale-95 hover:cursor-pointer">
        <MdOutlineAttachFile size={20} />
        <span>Thêm tệp tin</span>
      </div>
      <div className="h-px w-full bg-(--cb-border-primary)"></div>
      <div className="w-full h-full flex flex-col gap-2">
        {[...new Set(getMessageByConversationId().map((m) => m.knowledge_by))]
          .filter(Boolean)
          .map((file_name) => (
            <FileCard key={file_name} file_name={file_name!}  />
          ))}
      </div>
      <div
        className="border border-(--cb-border-primary) px-3 py-2 bg-white hover:cursor-pointer active:scale-95 rounded-lg text-center "
        onClick={() => setIsOpenFileContainer()}
      >
        <span>Đóng</span>
      </div>
    </div>
  );
};

export default FileContainer;
