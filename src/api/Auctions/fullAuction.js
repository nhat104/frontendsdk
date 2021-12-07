import axiosClient from '../axiosClient';

export function getFullAuctionApi(body) {
  return axiosClient.post('full_auction/list_fullauction/', body);
}
