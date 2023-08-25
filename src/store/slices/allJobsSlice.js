import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "../thunks/getAllJobs";
import { toast } from "react-toastify";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default allJobsSlice.reducer;
