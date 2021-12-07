import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingSellAnItem: false,
  dataItem: [],
  errorSellAnItem: false,
};

const sellAnItem = createSlice({
  name: 'sellAnItem',
  initialState,
  reducers: {
    sellAnItemRequest(state) {
      state.loadingSellAnItem = true;
      state.errorSellAnItem = false;
    },

    sellAnItemSuccess(state, action) {
      state.loadingSellAnItem = false;
      state.dataItem = action.payload;
    },

    sellAnItemError(state) {
      state.loadingSellAnItem = false;
      state.errorSellAnItem = true;
    },
  },
});

export const { sellAnItemRequest, sellAnItemSuccess, sellAnItemError } =
  sellAnItem.actions;
export default sellAnItem.reducer;
