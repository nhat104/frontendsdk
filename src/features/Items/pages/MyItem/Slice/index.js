import { createSlice } from '@reduxjs/toolkit';

// const listItem = [
//   {
//     id: '1',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 1',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '2',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 2',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '3',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 3',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '4',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 4',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '5',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 5',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '6',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 6',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '7',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 7',
//     tokenId: '#tokenId',
//     price: 6,
//     bid: 20,
//   },
//   {
//     id: '8',
//     nameGame: 'Game 3',
//     nameItem: 'Vật phẩm 1',
//     quantity: 1,
//     contractAdd: '#Contract Address 8',
//     tokenId: '#tokenId 2',
//     price: 6,
//     bid: 20,
//   },
// ];

const initialState = {
  loadingMyItem: false,
  dataItem: [],
  errorMyItem: false,
};

const myItem = createSlice({
  name: 'myItem',
  initialState,
  reducers: {
    getMyItemRequest(state) {
      state.loadingMyItem = true;
      state.errorMyItem = false;
    },

    getMyItemSuccess(state, action) {
      state.loadingMyItem = false;
      state.dataItem = action.payload;
    },

    getMyItemError(state) {
      state.loadingMyItem = false;
      state.errorMyItem = true;
    },
  },
});

export const { getMyItemRequest, getMyItemSuccess, getMyItemError } =
  myItem.actions;
export default myItem.reducer;
