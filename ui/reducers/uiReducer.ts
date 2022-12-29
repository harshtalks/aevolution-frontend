import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateT = {
  loginToggle: boolean;
  progress: number;
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loginToggle: false,
    progress: 1,
  } as initialStateT,
  reducers: {
    toggleLogin: (state, action: PayloadAction<boolean>) => {
      state.loginToggle = action.payload;
    },
    toggleProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { toggleLogin, toggleProgress } = uiSlice.actions;

export default uiSlice.reducer;
