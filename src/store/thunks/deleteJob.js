import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, {
  checkForUnauthorizedResponse,
} from "../../../utils/axios";
import { showLoading, hideLoading } from "../slices/allJobsSlice";
import { getAllJobs } from "./getAllJobs";

export const deleteJob = createAsyncThunk(
  "user/deleteJob",
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`);
      thunkAPI.dispatch(getAllJobs());
      return resp.data;
    } catch (error) {
      console.error(error.response);
      thunkAPI.dispatch(hideLoading());
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
