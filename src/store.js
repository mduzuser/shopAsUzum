import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./features/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
  },
});

export default store;
