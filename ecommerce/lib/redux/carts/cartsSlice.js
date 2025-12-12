import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, removeFromCart } from "./cartsThunk";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    data: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data[action.payload.userId] = action.payload.cart;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const { userId, item } = action.payload;
        state.data[userId].push(item);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const { userId, itemId } = action.payload;
        state.data[userId] = state.data[userId].filter(
          (i) => i.id !== itemId
        );
      });
  },
});

export default cartsSlice.reducer;
