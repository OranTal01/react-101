import CART_ACTIONS_TYPES from './cart.types';

const initialState = {
  hideCartDropdown: true,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN:
      return { ...state, hideCartDropdown: !state.hideCartDropdown };

    default:
      return state;
  }
};

export default cartReducer;
