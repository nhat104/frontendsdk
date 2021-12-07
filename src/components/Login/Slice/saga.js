import { takeLatest, call, put } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginError } from '../Slice';
import { loginApi } from '../../../api/login';

function* loginWithSaga(action) {
  try {
    const res = yield call(loginApi, action.payload);
    yield put(loginSuccess(res.results));
  } catch (error) {
    console.log(error);
    yield put(loginError());
  }
}

export default function* loginPageSaga() {
  yield takeLatest(loginRequest, loginWithSaga);
}
