import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {  // a JSON object that possible configuration that we want for redux-persist to use
    key: 'root',  // key to declare where we want to start our reducer object to store everything
    storage, // this will state what storage we want to use from redux-persist 
    whitelist: ['cart'] // this property is an array containing the string name of any of the reducer that we want to store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)