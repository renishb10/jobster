import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { registerUser } from "../thunks/registerUser";
import { loginUser } from "../thunks/loginUser";
import { updateUser } from "../thunks/updateUser";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSideBarOpen: false,
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isSideBarOpen = false;
      removeUserFromLocalStorage();
      if (action.payload) {
        toast.success(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        addUserToLocalStorage(action.payload.user);
        toast.success(`Hello there ${action.payload.user.name}`);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        addUserToLocalStorage(action.payload.user);
        toast.success(`Welcome back ${action.payload.user.name}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        addUserToLocalStorage(action.payload.user);
        toast.success(`User Profile Updated`);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
