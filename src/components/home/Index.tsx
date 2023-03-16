import React from "react";

import Faq from "./faq";
import LandingView from "./landing-view";
import SwapFlow from "./swap-flow";
import SwapType from "./swap-type";

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
