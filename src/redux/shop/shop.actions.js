// actions types
import SHOP_ACTION_TYPE from './shop.type';

// firestore utils
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: SHOP_ACTION_TYPE.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: SHOP_ACTION_TYPE.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: SHOP_ACTION_TYPE.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

//option 2 with observables
// collectionRef.onSnapshot(async snapshot => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   setCollections(collectionsMap);
//    dispatch(fetchCollectionsSuccess(collectionsMap));
// });

// option 3 with fetch
// fetch(
//   'https://firestore.googleapis.com/v1/projects/crwn-db-7414b/databases/(default)/documents/collections',
// )
//   .then(response => response.json())
//   .then(collections => console.log(collections));
