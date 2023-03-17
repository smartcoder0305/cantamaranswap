import React from "react";

import { CantamaranSwapProgress } from "./CantamaranSwap";

import StxImg from "../../../assets/img/stx.png";
import BtcImg from "../../../assets/img/btc.png";
import { ReactComponent as DownImg } from "../../../assets/img/down.svg";

const CantamaranConfirm = ({
  setSwapProgress,
}: {
  setSwapProgress: React.Dispatch<React.SetStateAction<CantamaranSwapProgress>>;
}) => {
  const onGoBackBtnClicked = () => {
    setSwapProgress(CantamaranSwapProgress.PREVEIW_SWAP);
  };

  const onConfirmBtnClicked = () => {
    setSwapProgress(CantamaranSwapProgress.SWAP_CONFIRM);
  };

  return (
    <div className="w-full p-5 flex flex-col gap-3 bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
      <p className="text-base leading-6 font-normal">Catamaran Swap</p>
      <div className="p-5 flex flex-col gap-5 rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="h-7 w-7" src={StxImg} alt="" />
            <p className="text-2xl font-medium leading-6">1</p>
          </div>
          <p className="text-[28px] leading-6">STX</p>
        </div>
        <div className="w-7 h-7 flex items-center justify-center">
          <DownImg className="dark:stroke-white stroke-special-black" />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="h-7 w-7" src={BtcImg} alt="" />
            <p className="text-2xl font-medium leading-6">0.000035</p>
          </div>
          <p className="text-[28px] leading-6">BTC</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-sm leading-[17px] opacity-50 font-normal">
          <p>Your BTC address</p>
          <p className="text-xs">1LdSd6KTEvJcyX2R8oyfgj5REuLzczMYC1</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-sm leading-[17px] opacity-50 font-normal">
          <p>Receiver BTC address</p>
          <p className="text-xs">biwSd6KTEvJcyX2R8oyfgj5REuLzczMYC1</p>
        </div>
        <div className="h-[1px] bg-[rgba(255,255,255,0.1)]" />
        <p className="text-sm leading-5 font-extralight">
          You will recive 0.000035 BTC. Transaction can be cancelled after 100
          blocks.
        </p>
      </div>
      <div className="text-sm leading-[14px] flex flex-col gap-5 p-5 rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A]">
        <div className="w-full flex justify-between items-center">
          <p className="opacity-50">Price</p>
          <p>0.000035 BTC/1 STX</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="opacity-50">Network Fee</p>
          <p>~$14.90</p>
        </div>
      </div>

      <div className="w-full flex justify-between gap-3">
        <button
          className="mt-5 flex-1 rounded-full py-3 bg-white dark:bg-special-black text-base font-medium leading-5 dark:text-white text-special-black border-[1px] dark:border-[white] border-special-black"
          onClick={onGoBackBtnClicked}
        >
          Go back
        </button>
        <button
          className="mt-5 flex-1 rounded-full py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
          onClick={onConfirmBtnClicked}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CantamaranConfirm;
