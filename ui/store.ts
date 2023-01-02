import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./reducers/eventReducer";
import uiReducer from "./reducers/uiReducer";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    eventForm: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
