import { createSlice } from "@reduxjs/toolkit";

export const modalAddToBasketSlice = createSlice({
  name: 'modalAddToBasket',
  initialState: false,
  reducers: {
    modalAddToBasket(state) {
      return state = !state;
    },
  },
});

export const { modalAddToBasket } = modalAddToBasketSlice.actions;
export const modalAddToBasketReducer = modalAddToBasketSlice.reducer;

