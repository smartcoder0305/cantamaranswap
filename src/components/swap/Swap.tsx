import React, { useState } from "react";
import SwapButton from "./SwapButton";

export const enum SwapItems {
  CANTAMARAN_SWAP = "Catamaran Swap",
  STX_SWAP = "STX Swap",
  NFT_SWAP = "NFT Swap",
}

const Swap = () => {
  const [selectedHeaderItem, setSelectedHeaderItem] = useState<SwapItems>(
    SwapItems.CANTAMARAN_SWAP
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex justify-center">
        <div className="max-w-[520px] w-full mt-24 flex flex-col gap-5">
          <div className="w-full flex rounded-[18px] bg-white dark:bg-[rgba(11,11,15,0.9)] p-2 gap-2.5 text-center">
            <SwapButton
              name={SwapItems.CANTAMARAN_SWAP}
              setSelectedHeaderItem={setSelectedHeaderItem}
              selectedHeaderItem={selectedHeaderItem}
            />
            <SwapButton
              name={SwapItems.STX_SWAP}
              setSelectedHeaderItem={setSelectedHeaderItem}
              selectedHeaderItem={selectedHeaderItem}
            />
            <SwapButton
              name={SwapItems.NFT_SWAP}
              setSelectedHeaderItem={setSelectedHeaderItem}
              selectedHeaderItem={selectedHeaderItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
