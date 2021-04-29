//dependencies
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import categoriesReducer from './categories/categories.reducer';
import shopReducer from './shop/shop.reducer';
//tool for local storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
