import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    logIn() {
      return true;
    },
    logOut(){
      return false;
    }
  },
});

export const { logIn,  logOut} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

