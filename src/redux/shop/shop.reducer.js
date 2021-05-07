//actions types
import SHOP_ACTION_TYPE from './shop.type';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPE.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };

    case SHOP_ACTION_TYPE.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };
    case SHOP_ACTION_TYPE.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
