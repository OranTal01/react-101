import { all, call, takeLatest, put } from 'redux-saga/effects';

//actions types
import USER_ACTIONS_TYPES from '../user/user.types';

//actions
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
