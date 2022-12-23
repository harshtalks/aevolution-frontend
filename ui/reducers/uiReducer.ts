import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateT = {
  loginToggle: boolean;
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loginToggle: false,
  } as initialStateT,
  reducers: {
    toggleLogin: (state, action: PayloadAction<boolean>) => {
      state.loginToggle = action.payload;
    },
  },
});

export const { toggleLogin } = uiSlice.actions;

export default uiSlice.reducer;
