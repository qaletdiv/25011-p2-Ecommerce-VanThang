import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk, loginThunk, registerThunk } from "./authThunk";

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
   token: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
   token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth(state) {
      state.user = null;
      state.error = null;
        state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;

      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
         state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(getMeThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
          state.token = action.payload.token;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;