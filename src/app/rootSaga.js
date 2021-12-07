import { all } from 'redux-saga/effects';
import LoginSaga from '../components/Login/Slice/saga';
import auctionSaga from '../features/Auctions/pages/Auction/Slice/saga';
import auctionAnItemSaga from '../features/Auctions/pages/AuctionForm/Slice/saga';
import fullAuctionSaga from '../features/Auctions/pages/FullAuction/Slice/saga';
import categorySaga from '../features/Items/components/Category/Slice/saga';
import buyAnItemSaga from '../features/Items/components/ItemSell/Slice/saga';
import itemDetailSaga from '../features/Items/pages/ItemDetail/Slice/saga';
import MintSaga from '../features/Items/pages/MintItem/Slice/saga';
import myItemSaga from '../features/Items/pages/MyItem/Slice/saga';
import sellAnItemSaga from '../features/Items/pages/SellForm/Slice/saga';
import sellItemSaga from '../features/Items/pages/SellItem/Slice/saga';

export default function* rootSaga() {
  yield all([
    LoginSaga(),
    MintSaga(),
    myItemSaga(),
    auctionSaga(),
    sellItemSaga(),
    fullAuctionSaga(),
    categorySaga(),
    itemDetailSaga(),
    sellAnItemSaga(),
    buyAnItemSaga(),
    auctionAnItemSaga(),
  ]);
}
