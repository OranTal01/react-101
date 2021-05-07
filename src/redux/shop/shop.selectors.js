import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : [],
);

export const selectCollectionItems = collectionParamsUrl =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionParamsUrl] : null,
  );

export const selectIsFetchingCollections = createSelector(
  [selectShop],
  shop => shop.isFetching,
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections,
);
