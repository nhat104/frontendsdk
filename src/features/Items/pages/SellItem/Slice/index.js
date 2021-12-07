import { createSlice } from '@reduxjs/toolkit';

// const listItem = [
//   {
//     id: '1',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 1',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '2',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 2',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '3',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 3',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '4',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 4',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '5',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 5',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '6',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 6',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '7',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 7',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '8',
//     nameGame: 'Game 2',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 8',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
// ];

const initialState = {
  loadingSellItem: false,
  dataItem: [],
  errorSellItem: false,
};

const sellItem = createSlice({
  name: 'sellItem',
  initialState,
  reducers: {
    getSellItemRequest(state) {
      state.loadingSellItem = true;
      state.errorSellItem = false;
    },

    getSellItemSuccess(state, action) {
      state.loadingSellItem = false;
      state.dataItem = action.payload;
    },

    getSellItemError(state) {
      state.loadingSellItem = false;
      state.errorSellItem = false;
    },
  },
});

export const { getSellItemRequest, getSellItemSuccess, getSellItemError } =
  sellItem.actions;
export default sellItem.reducer;
