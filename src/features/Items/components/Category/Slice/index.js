import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loadingGame: false,
  dataGame: [],
  errorGame: false,
  loadingCategory: false,
  dataCategory: [],
  errorCategory: false,
};

const categorySlice = createSlice ({
  name: 'category',
  initialState,
  reducers: {
    getGameRequest: state => {
      state.loadingGame = true;
      state.errorGame = false;
    },
    getGameSuccess: (state, action) => {
      state.loadingGame = false;
      state.dataGame = action.payload;
    },
    getGameError: state => {
      state.loadingGame = false;
      state.errorGame = true;
    },

    getCategoryRequest: state => {
      state.loadingCategory = true;
      state.errorCategory = false;
    },
    getCategorySuccess: (state, action) => {
      state.loadingCategory = false;
      state.dataCategory = action.payload;
    },
    getCategoryError: state => {
      state.loadingCategory = false;
      state.errorCategory = true;
    },
  },
});

export const {
  getGameRequest,
  getGameSuccess,
  getGameError,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryError,
} = categorySlice.actions;

export default categorySlice.reducer;
