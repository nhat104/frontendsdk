import { configureStore } from '@reduxjs/toolkit';
import CreateSagaMiddleware from 'redux-saga';
import loginReducer from '../components/Login/Slice';
import auctionSlice from '../features/Auctions/pages/Auction/Slice';
import auctionAnItemSlice from '../features/Auctions/pages/AuctionForm/Slice';
import fullAuctionSlice from '../features/Auctions/pages/FullAuction/Slice';
import categorySlice from '../features/Items/components/Category/Slice';
import buyAnItemSlice from '../features/Items/components/ItemSell/Slice';
import itemDetailSlice from '../features/Items/pages/ItemDetail/Slice';
import mintReducer from '../features/Items/pages/MintItem/Slice';
import myItemSlice from '../features/Items/pages/MyItem/Slice';
import sellAnItemSlice from '../features/Items/pages/SellForm/Slice';
import sellItemSlice from '../features/Items/pages/SellItem/Slice';
import rootSaga from './rootSaga';

const sagaMiddleware = CreateSagaMiddleware();

const rootReducer = {
  auction: auctionSlice,
  fullAuction: fullAuctionSlice,
  sellItem: sellItemSlice,
  myItem: myItemSlice,
  login: loginReducer,
  mint: mintReducer,
  category: categorySlice,
  itemDetail: itemDetailSlice,
  sellAnItem: sellAnItemSlice,
  buyAnItem: buyAnItemSlice,
  auctionAnItem: auctionAnItemSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['mint/uploadImageRequest'],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
