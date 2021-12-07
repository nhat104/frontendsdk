import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingFullAuction: true,
  api: [],
  errorFullAuction: false,
  dataItem: [
    {
      id: 10,
      nameGame: 'Game 1',
      items: [
        {
          id: 1,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 2,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 3,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
      ],
    },
    {
      id: 11,
      nameGame: 'Game 1',
      items: [
        {
          id: 1,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 2,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 3,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
      ],
    },
    {
      id: 12,
      nameGame: 'Game 1',
      items: [
        {
          id: 1,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 2,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
        {
          id: 3,
          nameGame: 'Game 1',
          nameItem: 'Vật phẩm 1',
          quantity: 1,
          contractAdd: '#Contract Address 1',
          tokenId: '#tokenId',
          price: 6,
          bid: 20,
        },
      ],
    },
  ],
};

const fullAuction = createSlice({
  name: 'fullAuction',
  initialState,
  reducers: {
    getFullAuctionRequest(state) {
      state.loadingFullAuction = true;
      state.errorFullAuction = false;
    },
    getFullAuctionSuccess(state, action) {
      state.loadingFullAuction = false;
      state.api = action.payload;
    },
    getFullAuctionError(state) {
      state.loadingFullAuction = false;
      state.errorFullAuction = true;
    },
  },
});

export const {
  getFullAuctionRequest,
  getFullAuctionSuccess,
  getFullAuctionError,
} = fullAuction.actions;
export default fullAuction.reducer;
