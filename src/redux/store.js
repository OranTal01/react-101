import { createStore, applyMiddleware } from 'redux';
//store alle the store in local storage
import { persistStore } from 'redux-persist';
//logs all the actions to the console
import logger from 'redux-logger';
//dispatch async action to reducers
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
