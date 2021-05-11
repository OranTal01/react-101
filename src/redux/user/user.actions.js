import USER_ACTIONS_TYPES from './user.types';

export const googleSignInStart = () => ({
  type: USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccesses = (currentUser) => ({
  type: USER_ACTIONS_TYPES.SIGN_IN_SUCCESSES,
  payload: currentUser,
});

export const signInFailure = (error) => ({
  type: USER_ACTIONS_TYPES.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: USER_ACTIONS_TYPES.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: USER_ACTIONS_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER_ACTIONS_TYPES.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: USER_ACTIONS_TYPES.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: USER_ACTIONS_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: USER_ACTIONS_TYPES.SIGN_UP_FAILURE,
  payload: error,
});
