import { createAsyncThunk } from "@reduxjs/toolkit"
import { createOrderApi, fetchOrderApi } from "../../api/ordersApi"

export const createOrder = createAsyncThunk(
  "orders/create",
  async (
    { userId, address, phone }: { userId: string; address: string, phone: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await createOrderApi(userId, address, phone)
      return res.data
    } catch (err: any) {
      return rejectWithValue("Order failed")
    }
  }
)
export const fetchOrders = createAsyncThunk(
  "orders/fetchAll",
  async(userId: string, {rejectWithValue}) => {
    try{
      const res = await fetchOrderApi(userId)
      return res.data
    } catch{
      return rejectWithValue("Fetch orders failed")
    }
  }
)