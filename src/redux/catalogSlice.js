import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalog: [],
  favorites: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.catalog = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

const catalogReducer = catalogSlice.reducer;

export default catalogReducer;

export const { setCatalog, addToFavorites, removeFromFavorites } =
  catalogSlice.actions;
