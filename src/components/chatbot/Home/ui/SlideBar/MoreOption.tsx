import React from "react";
import { id } from "zod/locales";

const MoreOption = () => {
  const logout = () => {
    return;
  };
  const report = () => {
    return;
  };
  const infor = () => {
    return;
  };
  const config = () => {
    return;
  };
  const MoreOptionValue = [
    { id: "1", name: "Hồ sơ", func: infor },
    { id: "2", name: "Cài đặt", func: config },
    { id: "3", name: "Báo lỗi", func: report },
    { id: "4", name: "Đăng xuất", func: logout },
  ];

  return (
    <div className="flex flex-col mt-2">
      {MoreOptionValue.map((el) => (
        <div
          key={el.id}
          className="group border-t border-(--cb-border-primary) rounded-sm py-2 pl-2 text-sm hover:bg-(--cb-hover-primary) active:scale-95 cursor-pointer"
        >
          <span className="group-hover:italic group-hover:underline">
            {el.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoreOption;
