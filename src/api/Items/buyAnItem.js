import axiosClient from '../axiosClient';

export function buyAnItemApi(body) {
  return axiosClient.post('transaction/buy_item/', body);
}
