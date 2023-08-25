import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";
import { logoutUser } from "../slices/userSlice";
import { clearValues } from "../slices/jobSlice";

export const createJob = createAsyncThunk(
  "user/createJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
