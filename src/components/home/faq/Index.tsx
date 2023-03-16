import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div className="w-full mt-[120px] mb-[184px]">
      <h1 className="text-[28px] leading-[33px] font-medium text-center">
        FAQ
      </h1>
      <div className="mt-10 w-full flex flex-col gap-3">
        <FaqItem title="What can go wrong with catamaran swaps (BTC - STX)?" />
        <FaqItem title="What can go wrong with atomic swaps?" />
        <FaqItem title="Where can I get FRIE tokens to pay fees?" />
        <FaqItem title="Where can I find more details about the used smart contracts?" />
        <FaqItem title="What was the first swap?" />
      </div>
    </div>
  );
};

export default Faq;
