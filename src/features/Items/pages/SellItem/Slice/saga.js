import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getSellItemError,
  getSellItemRequest,
  getSellItemSuccess,
} from '../Slice';
import { getSellItemApi } from '../../../../../api/Items/sellItem';

function* getSellItemSaga(action) {
  try {
    const res = yield call(getSellItemApi, action.payload);
    yield put(getSellItemSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(getSellItemError());
  }
}

export default function* sellItemSaga() {
  yield takeLatest(getSellItemRequest, getSellItemSaga);
}
