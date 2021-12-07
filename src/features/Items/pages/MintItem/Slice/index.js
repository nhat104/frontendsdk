import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingImageUpload: false,
  dataImage: {},
  dataImageResponse: {},
  errorImageUpload: false,
  dataCreateItem: {},
  dataToCreate: {},
  loadingCreateItem: false,
  createItemSuccess: false,
  errorCreateItem: false,
};

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {
    uploadImageRequest: (state) => {
      state.loadingImageUpload = true;
      state.errorImageUpload = false;
    },
    uploadImageSuccess: (state, action) => {
      state.loadingImageUpload = false;
      state.dataImage = action.payload;
      state.dataImageResponse = action.payload.data;
    },
    uploadImageError: (state) => {
      state.loadingImageUpload = false;
      state.errorImageUpload = true;
    },

    saveDataToCreate: (state, action) => {
      state.dataToCreate = action.payload;
    },
    createItemRequest: (state) => {
      state.loadingCreateItem = true;
      state.errorCreateItem = false;
      state.createItemSuccess = false;
    },
    createItemSuccess: (state, action) => {
      state.dataCreateItem = action.payload;
      state.loadingCreateItem = false;
      state.errorCreateItem = false;
      state.createItemSuccess = true;
    },
    createItemError: (state) => {
      state.loadingCreateItem = false;
      state.errorCreateItem = true;
      state.createItemSuccess = false;
    },
    updateLinkImage: (state, action) => {
      state.dataImage = { ...state.dataImage, linkImage: action.payload };
    },
  },
});

export const {
  uploadImageRequest,
  uploadImageSuccess,
  uploadImageError,
  saveDataToCreate,
  createItemRequest,
  createItemSuccess,
  createItemError,
  updateLinkImage,
} = mintSlice.actions;

export default mintSlice.reducer;
