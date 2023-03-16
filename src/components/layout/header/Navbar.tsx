import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "../../common/ConnectWallet";
import ThemeSelector from "../../common/ThemeSelector";

import { ReactComponent as CloseImg } from "../../../assets/img/close.svg";
import { ReactComponent as ChervonDownImg } from "../../../assets/img/chervon-down.svg";

const Navbar = ({
  navbarVisible,
  setNavbarVisible,
}: {
  navbarVisible: boolean;
  setNavbarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`sm:hidden overflow-hidden fixed z-10 top-0 right-0 ${
        navbarVisible ? "w-full" : "w-0"
      }  w-full h-[100vh] bg-white dark:bg-black transition-[width] duration-500`}
    >
      <div className="w-full h-20 px-5 flex justify-end items-center">
        <button onClick={() => setNavbarVisible(false)}>
          <CloseImg className="w-6 h-6 dark:stroke-white stroke-special-black" />
        </button>
      </div>
      <div className="justify-center px-8 flex flex-col gap-6">
        <Link to="/swaps" className="text-base font-normal leading-6">
          Swaps
        </Link>
        <Link to="/documentation" className="text-base font-normal leading-6">
          Documentation
        </Link>
        <Link
          to="/swaps"
          className="text-base font-normal leading-6 flex gap-3 items-center"
        >
          More <ChervonDownImg className="dark:fill-white fill-special-black" />
        </Link>
        <div className="w-full justify-center items-center flex gap-3">
          <ThemeSelector />
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
