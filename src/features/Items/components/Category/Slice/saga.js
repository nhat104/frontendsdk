import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getGameRequest,
  getGameSuccess,
  getGameError,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryError,
} from '../Slice';
import {
  getGameApi,
  getCategoryApi,
  getCategoryWithIdApi,
} from '../../../../../api/category';

function* getGameSaga() {
  try {
    const res = yield call(getGameApi);
    yield put(getGameSuccess(res.results));
  } catch (error) {
    put(getGameError());
  }
}

function* getCategorySaga() {
  try {
    const res = yield call(getCategoryApi);
    yield put(getCategorySuccess(res.results));
  } catch (error) {
    yield put(getCategoryError());
  }
}

function* getCategoryWithIdSaga(action) {
  try {
    const res = yield call(getCategoryWithIdApi, action.payload);
    yield put(getCategorySuccess(res.results));
  } catch (error) {
    yield put(getCategoryError());
  }
}

export default function* categorySaga() {
  yield takeLatest(getGameRequest, getGameSaga);
  // yield takeLatest(getCategoryRequest, getCategorySaga);
  yield takeLatest(getCategoryRequest, getCategoryWithIdSaga);
}
