import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, removeFromCart } from "./cartsThunk";

interface CartState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [],
      state.loading = false,
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.cart;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload.item);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (i) => i.id !== action.payload.itemId
        );
      });
  },
});

export const {clearCart} = cartSlice.actions
export default cartSlice.reducer;
