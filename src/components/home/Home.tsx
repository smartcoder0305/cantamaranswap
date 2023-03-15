import React from "react";
import { Link } from "react-router-dom";

import StxImg from "../../assets/img/stx.png";
import BtcImg from "../../assets/img/btc.png";
import MiaImg from "../../assets/img/mia.png";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-20">
        <div className="w-full flex flex-col items-center mt-[120px] mb-[64px] text-center">
          <h1 className="font-semibold text-[44px] leading-[60px] tracking-[1px]">
            Trustless exchange of digital assets
          </h1>
          <p className="max-w-[738px] mt-5 font-medium text-sm leading-7 text-center">
            Catamaran Swap gives you the guarantee that your assets will be
            transferred to the other party only after the transaction has been
            verified on the other side.
          </p>
          <Link
            to="swap"
            className="mt-5 rounded-full px-6 py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
          >
            Swap now
          </Link>
          <div className="max-w-[590px] w-full mt-[67px] dark:bg-special-black bg-white rounded-[18px] flex flex-col items-center p-5 gap-10">
            <p className="font-medium text-xl leading-6 mt-[24px]">
              Swap your digital assets..
            </p>
            <div className="w-full flex justify-around mb-[26px]">
              <div className="flex gap-2.5 items-center">
                <img className="h-10 w-10" src={StxImg} alt="" />
                <p className="font-medium text-[36px] leading-[43px]">STX</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <img className="h-10 w-10" src={BtcImg} alt="" />
                <p className="font-medium text-[36px] leading-[43px]">STX</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <img className="h-10 w-10" src={MiaImg} alt="" />
                <p className="font-medium text-[36px] leading-[43px]">STX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-[120px]">
          <div className="w-[610px] flex flex-col">
            <h1 className="font-medium text-[28px] leading-[33px] mb-[56px]">
              Looking to swap cryptocurrency on STX?
              <br /> Here's how.
            </h1>
            <div className="flex gap-6 h-10 items-center">
              <div className="w-10 h-10 flex justify-center items-center border-[1px] rounded-full border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
                <div className="w-1.5 h-1.5 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-full" />
              </div>
              <p className="text-sm font-normal leading-7">
                Seller of STX has to put STX into escrow.
              </p>
            </div>
            <div className="w-[1px] h-[56px] ml-5 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]" />
            <div className="flex gap-6 h-10">
              <div className="flex-none w-10 h-10 flex justify-center items-center border-[1px] rounded-full border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
                <div className="w-1.5 h-1.5 bg-special-black dark:bg-white rounded-full" />
              </div>
              <p className="text-sm font-normal leading-7">
                The buyer of BTC makes a btc transaction to the specified BTC
                address of the seller.
              </p>
            </div>
            <div className="w-[1px] h-[56px] ml-5 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]" />
            <div className="flex gap-6 h-10">
              <div className="flex-none w-10 h-10 flex justify-center items-center border-[1px] rounded-full bg-white dark:bg-[#191A20] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
                <div className="w-1.5 h-1.5 bg-special-black dark:bg-white rounded-full" />
              </div>
              <p className="text-sm font-normal leading-7">
                The seller or buyer submits the transaction id of the bitcoin
                transaction and the escrowed STX is released.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
