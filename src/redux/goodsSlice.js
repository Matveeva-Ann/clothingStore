import { createSlice } from "@reduxjs/toolkit";

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: [],
  reducers: {
    setAllGoods(state, action) {
      return [...action.payload];
    },
  },
});

export const { setAllGoods } = goodsSlice.actions;
export const goodsReducer = goodsSlice.reducer;

