import { createSlice } from "@reduxjs/toolkit";
import { setSwapDetail } from "./thunks";

export interface SwapDetail {
  amountInfo: {
    sendAmount: number;
    receiveAmount: number;
  };
}

const initialState: SwapDetail = {
  amountInfo: {
    sendAmount: 0,
    receiveAmount: 0,
  },
};

export const swapSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSwapDetail.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default swapSlice.reducer;
