import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../api/authApi";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await loginApi({ email, password });
      return res.data; 
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async({name,email,password}: {name:string; email: string; password: string }, {rejectWithValue}) => {
    try{
      const res = await registerApi({name, email,password});
      return res.data
    } catch(err) {
      return rejectWithValue("Email đã tồn tại")
    }
  }
)
