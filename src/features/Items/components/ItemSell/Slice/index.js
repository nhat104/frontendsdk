import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingBuyAnItem: false,
  dataItem: [],
  errorBuyAnItem: false,
};

const buyAnItem = createSlice({
  name: 'buyAnItem',
  initialState,
  reducers: {
    buyAnItemRequest(state) {
      state.loadingBuyAnItem = true;
      state.errorBuyAnItem = false;
    },

    buyAnItemSuccess(state, action) {
      state.loadingBuyAnItem = false;
      state.dataItem = action.payload;
    },

    buyAnItemError(state) {
      state.loadingBuyAnItem = false;
      state.errorBuyAnItem = true;
    },
  },
});

export const { buyAnItemRequest, buyAnItemSuccess, buyAnItemError } =
  buyAnItem.actions;
export default buyAnItem.reducer;
