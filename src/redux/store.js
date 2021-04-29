import { createStore, applyMiddleware } from 'redux';

//tool for see in the console all the actions and state that fire in the console
import logger from 'redux-logger';

//tool for local storage
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
