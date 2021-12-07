import axiosClient from '../axiosClient';

export function getAuctionApi(body) {
  return axiosClient.post('auction/list_auction/', body);
}
