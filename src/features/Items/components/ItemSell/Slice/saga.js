import { takeLatest, call, put } from 'redux-saga/effects';
import { buyAnItemError, buyAnItemRequest, buyAnItemSuccess } from '../Slice';
import { buyAnItemApi } from '../../../../../api/Items/buyAnItem';

function* buyAnItem(action) {
  try {
    const res = yield call(buyAnItemApi, action.payload);
    yield put(buyAnItemSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(buyAnItemError());
  }
}

export default function* buyAnItemSaga() {
  yield takeLatest(buyAnItemRequest, buyAnItem);
}
