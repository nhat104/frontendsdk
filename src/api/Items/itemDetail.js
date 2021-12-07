import axiosClient from '../axiosClient';

export function getItemDetailApi(id) {
  return axiosClient.get(`item/${id}`);
}

export function updateItemDetailApi(id, body) {
  return axiosClient.put(`item/${id}`, body);
}
