import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//this persistor is a persisted version of our store and by using persistore and store is how we will create our new provider that's wrapping out application
export const persistor = persistStore(store)

export default { store, persistor }