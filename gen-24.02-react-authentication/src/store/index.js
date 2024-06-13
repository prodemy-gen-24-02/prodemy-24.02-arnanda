import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
  },
});

export default store;
