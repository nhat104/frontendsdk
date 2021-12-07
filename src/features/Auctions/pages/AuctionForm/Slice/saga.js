import { takeLatest, call, put } from 'redux-saga/effects';
import {
  auctionAnItemError,
  auctionAnItemRequest,
  auctionAnItemSuccess,
} from '../Slice';
import { auctionAnItemApi } from '../../../../../api/Auctions/auctionAnItem';

function* auctionAnItem(action) {
  try {
    console.log(action.payload);
    const res = yield call(auctionAnItemApi, action.payload);
    yield put(auctionAnItemSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(auctionAnItemError());
  }
}

export default function* auctionAnItemSaga() {
  yield takeLatest(auctionAnItemRequest, auctionAnItem);
}
