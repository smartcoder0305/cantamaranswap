import React from "react";
import ConnectWallet from "../common/ConnectWallet";
import ThemeSelector from "../common/ThemeSelector";
import { Link } from "react-router-dom";

import { ReactComponent as LogoImg } from "../../assets/img/logo.svg";
import { ReactComponent as ChervonDownImg } from "../../assets/img/chervon-down.svg";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-center">
      <div className="max-w-[1440px] w-full px-20 flex justify-between items-center">
        <div className="w-3/12 flex items-center">
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <LogoImg className="w-9 h-6 dark:fill-white fill-special-black" />
          </div>
        </div>
        <div className="flex justify-center gap-12">
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
            More{" "}
            <ChervonDownImg className="dark:fill-white fill-special-black" />
          </Link>
        </div>
        <div className="w-3/12 flex justify-end gap-3">
          <ThemeSelector />
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
