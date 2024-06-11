import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../types";

const initialState = {
  cart: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...product, quantity }] };
      }
    }

    case REMOVE_FROM_CART: {
      const { productId, size } = action.payload;
      const updatedCart = state.cart.filter(
        (item) => !(item.id === productId && item.size === size)
      );
      return { ...state, cart: updatedCart };
    }

    case INCREASE_QUANTITY: {
      const updatedIncreaseCart = state.cart.map((item) =>
        item.id === action.payload.productId &&
        item.size === action.payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedIncreaseCart };
    }

    case DECREASE_QUANTITY: {
      const updatedDecreaseCart = state.cart.map((item) =>
        item.id === action.payload.productId &&
        item.size === action.payload.size &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cart: updatedDecreaseCart };
    }

    default:
      return state;
  }
};

export default checkoutReducer;
