import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingItemDetail: false,
  dataItem: [],
  errorItemDetail: false,
};

const itemDetail = createSlice({
  name: 'itemDetail',
  initialState,
  reducers: {
    getItemDetailRequest(state) {
      state.loadingItemDetail = true;
      state.errorItemDetail = false;
    },

    getItemDetailSuccess(state, action) {
      state.loadingItemDetail = false;
      state.dataItem = action.payload;
    },

    getItemDetailError(state) {
      state.loadingItemDetail = false;
      state.errorItemDetail = true;
    },
  },
});

export const {
  getItemDetailRequest,
  getItemDetailSuccess,
  getItemDetailError,
} = itemDetail.actions;
export default itemDetail.reducer;
