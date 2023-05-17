import { createAsyncThunk } from "@reduxjs/toolkit";
import { SwapAddressDetail, SwapAmountDetail, SwapDetail } from ".";

export const setSwapAmountDetail = createAsyncThunk(
  "setSwapDetail",
  async (swapAmountInfo: SwapAmountDetail) => swapAmountInfo
);

export const setSwapAddressDetail = createAsyncThunk(
  "setSwapDetail",
  async (swapAddressInfo: SwapAddressDetail) => swapAddressInfo
);
