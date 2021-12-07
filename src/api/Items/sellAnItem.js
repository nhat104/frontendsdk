import axiosClient from '../axiosClient';

export function sellAnItemApi(body) {
  return axiosClient.post('transaction/sell_item/', body);
}
