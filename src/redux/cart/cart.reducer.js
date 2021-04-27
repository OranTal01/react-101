import CART_ACTIONS_TYPES from './cart.types';

//utils
import { addItemToCart } from './cart.utils';

const initialState = {
  hideCartDropdown: false,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN:
      return { ...state, hideCartDropdown: !state.hideCartDropdown };
    case CART_ACTIONS_TYPES.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    default:
      return state;
  }
};

export default cartReducer;
