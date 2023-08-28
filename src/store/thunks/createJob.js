import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, {
  checkForUnauthorizedResponse,
} from "../../../utils/axios";
import { logoutUser } from "../slices/userSlice";
import { clearValues } from "../slices/jobSlice";

export const createJob = createAsyncThunk(
  "user/createJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job);
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      console.error(error.response);
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
