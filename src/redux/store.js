import { createStore, applyMiddleware } from 'redux';
//store alle the store in local storage
import { persistStore } from 'redux-persist';
//logs all the actions to the console
import logger from 'redux-logger';
//dispatch async action to reducers
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
