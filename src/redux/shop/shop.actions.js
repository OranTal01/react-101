import SHOP_ACTION_TYPE from './shop.type';

export const setCollections = collections => ({
  type: SHOP_ACTION_TYPE.SET_COLLECTIONS,
  payload: collections,
});
