import USER_ACTIONS_TYPES from './user.types';

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESSES:
    case USER_ACTIONS_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case USER_ACTIONS_TYPES.SIGN_IN_FAILURE:
    case USER_ACTIONS_TYPES.SIGN_OUT_FAILURE:
    case USER_ACTIONS_TYPES.SIGN_UP_FAILURE:
      return { ...state, error: payload };
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    default:
      return state;
  }
};

export default userReducer;
