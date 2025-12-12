import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import usersReducer from "./users/usersSlice";
import cartsReducer from "./carts/cartsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    carts: cartsReducer,
  },
});
