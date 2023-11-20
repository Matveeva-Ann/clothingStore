import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    basketGoods(state, action) {
      return [...action.payload];
    },
  },
});

export const { basketGoods } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
