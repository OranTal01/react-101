import CART_ACTIONS_TYPES from './cart.types';

//utils
import { addItemToCart, decreaseAndRemoveCartItem } from './cart.utils';

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
    case CART_ACTIONS_TYPES.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItemToRemove) => cartItemToRemove.id !== payload.id,
        ),
      };
    case CART_ACTIONS_TYPES.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseAndRemoveCartItem(state.cartItems, payload),
      };
    case CART_ACTIONS_TYPES.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
