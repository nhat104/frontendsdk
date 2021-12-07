import axiosClient from './axiosClient';

export function loginApi(params) {
  return axiosClient.post('login/', params);
}
