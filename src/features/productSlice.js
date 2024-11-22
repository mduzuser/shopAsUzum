import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const stateFromLocal = () => {
  return (
    JSON.parse(localStorage.getItem("products")) ?? {
      products: [],
      allProducts: 0,
      price: 0,
    }
  );
};

const productSlice = createSlice({
  name: "products",
  initialState: stateFromLocal(),
  reducers: {
    addProduct: (state, { payload }) => {
      const product = state.products.find((prod) => prod.id == payload.id);
      toast.success("One item is added to Cart 🛒");

      if (product) {
        toast.warning("Product is already added!");
      } else {
        state.products = [...state.products, payload];
      }
      productSlice.caseReducers.calculateTotal(state);
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id != payload,
      );
      productSlice.caseReducers.calculateTotal(state);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);
      item.amount += 1;
      productSlice.caseReducers.calculateTotal(state);
    },
    dicrementAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);
      item.amount -= 1;
      productSlice.caseReducers.calculateTotal(state);
    },

    calculateTotal: (state) => {
      let allProductsCounter = 0;
      let allProductPrice = 0;
      state.products.forEach((product) => {
        allProductPrice += product.amount * product.price;
        allProductsCounter += product.amount;
      });

      state.allProducts = allProductsCounter;
      state.price = parseFloat(allProductPrice.toFixed(2));
      localStorage.setItem("products", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.products = [];
      state.allProducts = 0;
      state.price = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementAmount,
  dicrementAmount,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
