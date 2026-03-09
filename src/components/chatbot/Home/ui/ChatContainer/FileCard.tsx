import React from "react";

interface Props {
  file_name: string;
}

const FileCard = ({ file_name }: Props) => {
  return (
    <div
      key={file_name}
      className="flex group hover:bg-(--cb-hover-primary) p-2 px-4 hover:cursor-pointer justify-between rounded-lg"
    >
      <span>{file_name}</span>
      <span className="hidden group-hover:block hover:italic hover:underline hover:text-red-500 active:scale-95">
        Mở
      </span>
    </div>
  );
};

export default FileCard;
