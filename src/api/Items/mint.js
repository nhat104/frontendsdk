import axiosClient from '../axiosClient';

export function uploadApi(formdata) {
  return axiosClient.post('file/', formdata);
}

export function createItemApi(body) {
  return axiosClient.post('item/', body);
}
