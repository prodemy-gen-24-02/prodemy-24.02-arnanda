import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../types";

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const removeFromCart = (productId, size) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId, size },
  };
};

export const increaseQuantity = (productId, size) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { productId, size },
  };
};

export const decreaseQuantity = (productId, size) => {
  return {
    type: DECREASE_QUANTITY,
    payload: { productId, size },
  };
};
