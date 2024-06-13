import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingIndex !== -1) {
        state.cart[existingIndex].quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { productId, size } = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item.id === productId && item.size === size)
      );
    },
    increaseQuantity: (state, action) => {
      const { productId, size } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === productId && item.size === size
      );
      if (existingIndex !== -1) {
        state.cart[existingIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId, size } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === productId && item.size === size
      );
      if (existingIndex !== -1 && state.cart[existingIndex].quantity > 1) {
        state.cart[existingIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
