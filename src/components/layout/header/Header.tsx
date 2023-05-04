import React, { useState } from "react";
import { Link } from "react-router-dom";

import ConnectWallet from "../../common/ConnectWallet";
import ThemeSelector from "../../common/ThemeSelector";
import Navbar from "./Navbar";

import { ReactComponent as LogoImg } from "../../../assets/img/logo.svg";
import { ReactComponent as ChevronDownImg } from "../../../assets/img/chevron-down.svg";
import { ReactComponent as NavbarImg } from "../../../assets/img/navbar.svg";

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <div className="w-full overflow-x-hidden relative">
      <Navbar
        navbarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
      />
      <div className="w-full h-20 flex justify-center">
        <div className="max-w-[1440px] w-full px-5 sm:px-20 flex justify-between items-center">
          <div className="flex-1 flex items-center">
            <Link
              className="w-[72px] h-[72px] flex justify-center items-center"
              to="/"
            >
              <LogoImg className="w-9 h-6 dark:fill-white fill-special-black" />
            </Link>
          </div>
          <div className="justify-center hidden sm:flex gap-12">
            <Link to="/swaps" className="text-base font-normal leading-6">
              Swaps
            </Link>
            <Link
              to="/documentation"
              className="text-base font-normal leading-6"
            >
              Documentation
            </Link>
            <Link
              to="/more"
              className="text-base font-normal leading-6 flex gap-3 items-center"
            >
              More{" "}
              <ChevronDownImg className="dark:fill-white fill-special-black" />
            </Link>
          </div>
          <div className="flex-1 justify-end items-center hidden sm:flex gap-3">
            <ThemeSelector />
            <ConnectWallet />
          </div>
          <button className="sm:hidden" onClick={() => setNavbarVisible(true)}>
            <NavbarImg className="w-6 h-6 dark:fill-white fill-special-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
