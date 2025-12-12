import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductsApi,
  addProductApi,
  deleteProductApi,
} from "../../api/productsApi";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await getProductsApi();
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (product) => {
    const res = await addProductApi(product);
    return res.data;
  }
);

export const removeProduct = createAsyncThunk(
  "products/remove",
  async (id) => {
    await deleteProductApi(id);
    return id;
  }
);
