import CART_ACTIONS_TYPES from './cart.types';

export const toggleCartDropdown = () => ({
  type: CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
  type: CART_ACTIONS_TYPES.ADD_ITEM,
  payload: item,
});
