import { createAsyncThunk } from "@reduxjs/toolkit";
import { SwapDetail } from ".";

export const setSwapDetail = createAsyncThunk(
  "setSwapDetail",
  async (swapInfo: SwapDetail) => swapInfo
);
