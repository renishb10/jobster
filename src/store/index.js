import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
userSlice;

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
