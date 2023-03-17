import React, { useState } from "react";
import CantamaranComplete from "./CantamaranComplete";
import CantamaranConfirm from "./CantamaranConfirm";
import CantamaranPreview from "./CantamaranPreview";

export const enum CantamaranSwapProgress {
  PREVEIW_SWAP = "Preview Swap",
  SWAP_CONFIRM = "Swap confirm",
  SWAP_COMPLETED = "Swap completed",
}

const CanatamaranSwap = () => {
  const [swapProgress, setSwapProgress] = useState<CantamaranSwapProgress>(
    CantamaranSwapProgress.PREVEIW_SWAP
  );

  return (
    <>
      {(() => {
        switch (swapProgress) {
          case CantamaranSwapProgress.PREVEIW_SWAP:
            return <CantamaranPreview setSwapProgress={setSwapProgress} />;
          case CantamaranSwapProgress.SWAP_CONFIRM:
            return <CantamaranConfirm setSwapProgress={setSwapProgress} />;
          case CantamaranSwapProgress.SWAP_COMPLETED:
            return <CantamaranComplete setSwapProgress={setSwapProgress} />;
        }
      })()}
    </>
  );
};

export default CanatamaranSwap;
