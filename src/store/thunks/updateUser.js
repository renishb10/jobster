import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, {
  checkForUnauthorizedResponse,
} from "../../../utils/axios";
import { logoutUser } from "../slices/userSlice";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/auth/updateUser", user);
      return resp.data;
    } catch (error) {
      console.error(error.response);
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
