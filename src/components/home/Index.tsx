import React from "react";
import { Link } from "react-router-dom";
import Faq from "./faq/Index";
import LandingView from "./landing-view";

import SwapFlow from "./swap-flow/Index";
import SwapType from "./swap-type/Index";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-20">
        <LandingView />
        <SwapFlow />
        <SwapType />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
