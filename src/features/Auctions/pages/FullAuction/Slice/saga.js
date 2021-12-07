import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getFullAuctionError,
  getFullAuctionRequest,
  getFullAuctionSuccess,
} from '../Slice';
import { getFullAuctionApi } from '../../../../../api/Auctions/fullAuction';

function* getFullAuctionSaga(action) {
  try {
    const res = yield call(getFullAuctionApi, action.payload);
    yield put(getFullAuctionSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(getFullAuctionError());
  }
}

export default function* fullAuctionSaga() {
  yield takeLatest(getFullAuctionRequest, getFullAuctionSaga);
}
