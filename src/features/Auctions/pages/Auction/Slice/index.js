import { createSlice } from '@reduxjs/toolkit';

// const listItem = [
//   {
//     id: '1',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 1',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '2',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 2',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '3',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 3',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '4',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 4',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '5',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 5',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '6',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 6',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '7',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 7',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '8',
//     nameGame: 'Game 1',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 8',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
// ];

const initialState = {
  loadingAuction: false,
  dataItem: [],
  errorAuction: false,
};

const auction = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    getAuctionRequest(state) {
      state.loadingAuction = true;
      state.errorAuction = false;
    },

    getAuctionSuccess(state, action) {
      state.loadingAuction = false;
      state.dataItem = action.payload;
    },

    getAuctionError(state) {
      state.loadingAuction = false;
      state.errorAuction = true;
    },
  },
});

export const { getAuctionRequest, getAuctionSuccess, getAuctionError } =
  auction.actions;
export default auction.reducer;
