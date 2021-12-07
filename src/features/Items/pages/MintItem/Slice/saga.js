import { takeLatest, call, put } from 'redux-saga/effects';
import {
  uploadImageRequest,
  uploadImageSuccess,
  uploadImageError,
  createItemRequest,
  createItemSuccess,
  createItemError,
} from '../Slice';
import { uploadApi, createItemApi } from '../../../../../api/Items/mint';

function* uploadImageSaga(action) {
  try {
    const res = yield call(uploadApi, action.payload.file);
    yield put(
      uploadImageSuccess({ data: res, linkImage: action.payload.linkImage })
    );
  } catch (error) {
    put(uploadImageError());
  }
}

function* createItemSaga(action) {
  try {
    const res = yield call(createItemApi, action.payload);
    yield put(createItemSuccess(res.results));
  } catch (error) {
    yield put(createItemError());
  }
}
export default function* mintSaga() {
  yield takeLatest(uploadImageRequest, uploadImageSaga);
  yield takeLatest(createItemRequest, createItemSaga);
}
