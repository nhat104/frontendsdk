import { takeLatest, call, put } from 'redux-saga/effects';
import { getItemDetailApi } from '../../../../../api/Items/itemDetail';
import {
  getItemDetailError,
  getItemDetailRequest,
  getItemDetailSuccess,
} from '../Slice';

function* getItemDetailSaga(action) {
  try {
    const res = yield call(getItemDetailApi, action.payload);
    yield put(getItemDetailSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(getItemDetailError());
  }
}

export default function* itemDetailSaga() {
  yield takeLatest(getItemDetailRequest, getItemDetailSaga);
}
