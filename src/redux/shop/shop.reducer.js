//actions types
import SHOP_ACTION_TYPE from './shop.type';

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPE.SET_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
