import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingAuctionAnItem: false,
  dataItem: [],
  errorAuctionAnItem: false,
};

const auctionAnItem = createSlice({
  name: 'auctionAnItem',
  initialState,
  reducers: {
    auctionAnItemRequest(state) {
      state.loadingAuctionAnItem = true;
      state.errorAuctionAnItem = false;
    },

    auctionAnItemSuccess(state, action) {
      state.loadingAuctionAnItem = false;
      state.dataItem = action.payload;
    },

    auctionAnItemError(state) {
      state.loadingAuctionAnItem = false;
      state.errorAuctionAnItem = true;
    },
  },
});

export const {
  auctionAnItemRequest,
  auctionAnItemSuccess,
  auctionAnItemError,
} = auctionAnItem.actions;
export default auctionAnItem.reducer;
