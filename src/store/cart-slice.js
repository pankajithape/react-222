import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;