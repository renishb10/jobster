import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import jobSlice from "./slices/jobSlice";
import allJobsSlice from "./slices/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
