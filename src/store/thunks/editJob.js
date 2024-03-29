import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, {
  checkForUnauthorizedResponse,
} from "../../../utils/axios";
import { logoutUser } from "../slices/userSlice";
import { clearValues } from "../slices/jobSlice";

export const editJob = createAsyncThunk(
  "user/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job);
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      console.error(error.response);
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
