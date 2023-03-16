import React from "react";

import { ReactComponent as ChervonDownImg } from "../../../assets/img/chervon-down.svg";

const FaqItem = ({ title }: { title: string }) => {
  return (
    <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
      <p className="text-base leading-6 font-medium">{title}</p>
      <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
    </div>
  );
};

export default FaqItem;
