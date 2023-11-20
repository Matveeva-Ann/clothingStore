import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    favoriteGoods(state, action) {
      return [...action.payload];
    },
  },
});

export const { favoriteGoods } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
