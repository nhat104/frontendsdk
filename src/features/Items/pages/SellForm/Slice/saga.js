import { takeLatest, call, put } from 'redux-saga/effects';
import {
  sellAnItemError,
  sellAnItemRequest,
  sellAnItemSuccess,
} from '../Slice';
import { sellAnItemApi } from '../../../../../api/Items/sellAnItem';

function* sellAnItem(action) {
  try {
    const res = yield call(sellAnItemApi, action.payload);
    yield put(sellAnItemSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(sellAnItemError());
  }
}

export default function* sellAnItemSaga() {
  yield takeLatest(sellAnItemRequest, sellAnItem);
}
