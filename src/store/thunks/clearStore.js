import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutUser } from "../slices/userSlice";
import { clearAllJobsState } from "../slices/allJobsSlice";
import { clearValues } from "../slices/jobSlice";

export const clearStore = createAsyncThunk(
  "user/clearStore",
  async (message, thunkAPI) => {
    try {
      thunkAPI.dispatch(logoutUser(message));
      thunkAPI.dispatch(clearAllJobsState());
      thunkAPI.dispatch(clearValues());
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }
);
