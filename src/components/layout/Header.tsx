import React from "react";
import ConnectWallet from "../common/ConnectWallet";

import LogoImg from "../../assets/img/logo-light.svg";
import SunImg from "../../assets/img/sun.svg";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-center">
      <div className="max-w-[1440px] w-full px-20 flex justify-between items-center">
        <div className="w-3/12 flex items-center">
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={LogoImg} alt="" className="w-9 h-6" />
          </div>
        </div>
        <div className="w-3/12 flex justify-end gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[rgba(255,255,255,0.1);]">
            <img src={SunImg} alt="" />
          </div>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
