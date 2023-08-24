import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      console.error(error.response);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
