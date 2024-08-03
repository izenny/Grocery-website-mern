import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderInfo: {},
  },
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderInfo = action.payload;
    },
    clearOrderDetails: (state, action) => {
      state.orderInfo = {};
    },
  },
});
export const { setOrderDetails, clearOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;