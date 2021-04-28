import CART_ACTIONS_TYPES from './cart.types';

export const toggleCartDropdown = () => ({
  type: CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
  type: CART_ACTIONS_TYPES.ADD_ITEM,
  payload: item,
});

export const removeCartItem = item => ({
  type: CART_ACTIONS_TYPES.REMOVE_CART_ITEM,
  payload: item,
});

export const decreaseCartItem = item => ({
  type: CART_ACTIONS_TYPES.DECREASE_CART_ITEM,
  payload: item,
});
