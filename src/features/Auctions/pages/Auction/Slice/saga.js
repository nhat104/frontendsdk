import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getAuctionError,
  getAuctionRequest,
  getAuctionSuccess,
} from '../Slice';
import { getAuctionApi } from '../../../../../api/Auctions/auction';

function* getAuctionSaga(action) {
  try {
    const res = yield call(getAuctionApi, action.payload);
    yield put(getAuctionSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(getAuctionError());
  }
}

export default function* AuctionSaga() {
  yield takeLatest(getAuctionRequest, getAuctionSaga);
}
