import { takeLatest, call, put } from 'redux-saga/effects';
import { getMyItemRequest, getMyItemError, getMyItemSuccess } from '../Slice';
import { getMyItemApi } from '../../../../../api/Items/myItem';

function* getMyItemSaga(action) {
  try {
    const res = yield call(getMyItemApi, action.payload);
    yield put(getMyItemSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(getMyItemError());
  }
}

export default function* myItemSaga() {
  yield takeLatest(getMyItemRequest, getMyItemSaga);
}
