import { takeLatest, call, put } from 'redux-saga/effects';

// firestore utils
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

//actions
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

//types
import SHOP_ACTION_TYPE from './shop.type';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(SHOP_ACTION_TYPE.FETCH_COLLECTIONS_START, fetchCollections);
}
