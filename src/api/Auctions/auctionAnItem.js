import axiosClient from '../axiosClient';

export function auctionAnItemApi(body) {
  return axiosClient.post('auction/sell_auction/', body);
}
