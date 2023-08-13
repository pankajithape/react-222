import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import searchSlice from './search-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer, cart: cartSlice.reducer, search: searchSlice.reducer
  },
});

export default store;
