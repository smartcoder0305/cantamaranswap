import React from "react";
import { Link } from "react-router-dom";

import StxImg from "../../assets/img/stx.png";
import BtcImg from "../../assets/img/btc.png";
import MiaImg from "../../assets/img/mia.png";
import SwapImg from "../../assets/img/swap.svg";
import { ReactComponent as ChervonDownImg } from "../../assets/img/chervon-down.svg";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-20">
        <div className="w-full flex flex-col items-center mt-[120px] sm:mb-[64px] text-center">
          <h1 className="font-semibold text-[36px] sm:text-[44px] leading-[40px] sm:leading-[60px] tracking-[1px]">
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
            <div className="w-full flex flex-col gap-3 items-center sm:items-start sm:flex-row sm:justify-around mb-[26px]">
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
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center py-[120px]">
          <div className="max-w-[610px] w-full flex flex-col">
            <h1 className="font-medium text-xl sm:text-[28px] leading-[33px] mb-[56px]">
              Looking to swap cryptocurrency on STX?
              <br /> Here's how.
            </h1>
            <div className="flex gap-6 h-10 items-center">
              <div className="w-10 h-10 flex flex-none justify-center items-center border-[1px] rounded-full border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
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
            <div className="flex gap-6 h-10 sm:pb-0 pb-8">
              <div className="flex-none w-10 h-10 flex justify-center items-center border-[1px] rounded-full bg-white dark:bg-[#191A20] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
                <div className="w-1.5 h-1.5 bg-special-black dark:bg-white rounded-full" />
              </div>
              <p className="text-sm font-normal leading-7">
                The seller or buyer submits the transaction id of the bitcoin
                transaction and the escrowed STX is released.
              </p>
            </div>
          </div>
          <div className="max-w-[520px] w-full mt-24 flex flex-col gap-5">
            <div className="w-full flex rounded-[18px] bg-white dark:bg-[rgba(11,11,15,0.9)] p-2 gap-2.5 text-center">
              <p className="flex-1 flex items-center justify-center py-2 bg-[rgba(7,7,10,0.07)] dark:bg-[#14151A] rounded-2xl text-base font-normal">
                Catamaran Swap
              </p>
              <p className="flex-1 flex items-center justify-center py-2 rounded-2xl text-base font-normal">
                STX Swap
              </p>
              <p className="flex-1 flex items-center justify-center py-2 rounded-2xl text-base font-normal">
                NFT Swap
              </p>
            </div>
            <div className="w-full p-5 flex flex-col gap-3 bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
              <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A]">
                <div>
                  <p className="text-xs font-light leading-[14px] opacity-50">
                    You send
                  </p>
                  <p className="mt-2 text-[28px] leading-6 font-light">1</p>
                  <p className="mt-4 text-xs leading-[14px] font-light opacity-50">
                    ≈$275,208
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="h-7 w-7" src={StxImg} alt="" />
                  <p className="text-xl font-medium leading-6">STX</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A]">
                <div>
                  <p className="text-xs font-light leading-[14px] opacity-50">
                    You receive
                  </p>
                  <p className="mt-2 text-[28px] leading-6 font-light">
                    0.000035
                  </p>
                  <p className="mt-4 text-xs leading-[14px] font-light opacity-50">
                    ≈$275,469
                    <span className="ml-1 text-[#559276]">(0.0965%)</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="h-7 w-7" src={BtcImg} alt="" />
                  <p className="text-xl font-medium leading-6">BTC</p>
                </div>
              </div>
              <p className="px-10 py-2 text-sm leading-5 font-light">
                1 BTC = 0.0004354 STX
                <span className="opacity-50"> ($1.00043)</span>
              </p>
            </div>
          </div>
        </div>
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
