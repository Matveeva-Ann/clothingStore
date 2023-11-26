const { createSlice } = require("@reduxjs/toolkit");


const userData = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    userDataState(state, action){
      return {...action.payload}
    }
  }
})

export const { userDataState } = userData.actions;
export const userDataReducer = userData.reducer;
