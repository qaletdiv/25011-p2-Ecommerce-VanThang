import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, createProduct, removeProduct } from "./productsThunk";


export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

/* =======================
   INITIAL STATE
======================= */
const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

/* =======================
   SLICE
======================= */
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetch products failed";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (p) => p.id !== action.payload
        );
      });
  },
});

export default productsSlice.reducer;
