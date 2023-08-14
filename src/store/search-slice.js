import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchTerm: "" },
  reducers: {
    searchBeer(state, action) {
      const searchItem = action.payload;
      state.searchTerm = searchItem;
    }
  }
});

export const searchActions = searchSlice.actions;

export default searchSlice;