import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartApi, addCartApi, removeCartApi } from "../../api/cartsApi";

export const fetchCart = createAsyncThunk("carts/fetch", async (userId) => {
  const res = await getCartApi(userId);
  return { userId, cart: res.data };
});

export const addToCart = createAsyncThunk(
  "carts/add",
  async ({ userId, item }) => {
    const res = await addCartApi(userId, item);
    return { userId, item: res.data };
  }
);

export const removeFromCart = createAsyncThunk(
  "carts/remove",
  async ({ userId, itemId }) => {
    await removeCartApi(userId, itemId);
    return { userId, itemId };
  }
);
