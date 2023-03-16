import React from "react";
import { Link } from "react-router-dom";
import LandingView from "./landing-view";

import { ReactComponent as ChervonDownImg } from "../../assets/img/chervon-down.svg";
import SwapFlow from "./swap-flow/Index";
import SwapType from "./swap-type/Index";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-20">
        <LandingView />
        <SwapFlow />
        <SwapType />
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
