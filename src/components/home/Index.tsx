import React from "react";
import { Link } from "react-router-dom";
import LandingView from "./landing-view";

import StxImg from "../../assets/img/stx.png";
import BtcImg from "../../assets/img/btc.png";
import SwapImg from "../../assets/img/swap.svg";
import { ReactComponent as ChervonDownImg } from "../../assets/img/chervon-down.svg";
import SwapFlow from "./swap-flow/Index";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-20">
        <LandingView />
        <SwapFlow />
        <div className="w-full flex flex-col items-center mt-[120px]]">
          <>
            <h1 className="text-[28px] leading-[33px] font-medium text-center">
              Swap your digital assets
            </h1>
            <p className="mt-4 text-sm leading-7 text-center font-light">
              You can use Catamaran swaps in three ways.
            </p>
          </>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-between gap-[30px]">
            <div className="flex-1 flex flex-col items-center bg-white dark:bg-[rgba(11,11,15,0.9)] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[18px] px-[18px] py-10">
              <div className="flex gap-3">
                <img
                  src={BtcImg}
                  alt=""
                  className="w-[52px] h-[52px] rotate-[15deg]"
                />
                <img src={SwapImg} alt="" className="w-6" />
                <img src={StxImg} alt="" className="w-[52px] h-[52px]" />
              </div>
              <p className="text-base leading-6 text-center mt-[18px]">
                Swap between BTC and STC chain using catamaran swaps
              </p>
              <Link
                to="swap"
                className="mt-5 rounded-full px-6 py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
              >
                Swap now
              </Link>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white dark:bg-[rgba(11,11,15,0.9)] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[18px] px-[18px] py-10">
              <div className="flex gap-3">
                <img
                  src={BtcImg}
                  alt=""
                  className="w-[52px] h-[52px] rotate-[15deg]"
                />
                <img src={SwapImg} alt="" className="w-6" />
                <img src={StxImg} alt="" className="w-[52px] h-[52px]" />
              </div>
              <p className="text-base leading-6 text-center mt-[18px]">
                Swap between BTC and STC chain using catamaran swaps
              </p>
              <Link
                to="swap"
                className="mt-5 rounded-full px-6 py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
              >
                Swap now
              </Link>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white dark:bg-[rgba(11,11,15,0.9)] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[18px] px-[18px] py-10">
              <div className="flex gap-3">
                <img
                  src={BtcImg}
                  alt=""
                  className="w-[52px] h-[52px] rotate-[15deg]"
                />
                <img src={SwapImg} alt="" className="w-6" />
                <img src={StxImg} alt="" className="w-[52px] h-[52px]" />
              </div>
              <p className="text-base leading-6 text-center mt-[18px]">
                Swap between BTC and STC chain using catamaran swaps
              </p>
              <Link
                to="swap"
                className="mt-5 rounded-full px-6 py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
              >
                Swap now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-[120px] mb-[184px]">
          <h1 className="text-[28px] leading-[33px] font-medium text-center">
            FAQ
          </h1>
          <div className="mt-10 w-full flex flex-col gap-3">
            <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <p className="text-base leading-6 font-medium">
                What can go wrong with catamaran swaps (BTC - STX)?
              </p>
              <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
            </div>
            <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <p className="text-base leading-6 font-medium">
                What can go wrong with atomic swaps?
              </p>
              <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
            </div>
            <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <p className="text-base leading-6 font-medium">
                Where can I get FRIE tokens to pay fees?
              </p>
              <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
            </div>
            <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <p className="text-base leading-6 font-medium">
                Where can I find more details about the used smart contracts?
              </p>
              <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
            </div>
            <div className="flex px-6 py-4 items-center justify-between bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <p className="text-base leading-6 font-medium">
                What was the first swap?
              </p>
              <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
