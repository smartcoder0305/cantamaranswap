import React, { useState } from "react";
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
            return <CantamaranPreview />;
        }
      })()}
    </>
  );
};

export default CanatamaranSwap;
