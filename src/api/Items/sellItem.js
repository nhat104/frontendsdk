import axiosClient from '../axiosClient';

export function getSellItemApi(body) {
  return axiosClient.post('transaction/list_transaction/', body);
}
