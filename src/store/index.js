import { combineReducers, configureStore,  getDefaultMiddleware,} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import searchSlice from './search-slice';
import storage from 'redux-persist/lib/storage' 
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'persist-key',
  storage,
}

export const rootReducers = combineReducers({
  cart: cartSlice.reducer,search: searchSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer, 
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

});

export default store;