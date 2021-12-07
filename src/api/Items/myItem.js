import axiosClient from '../axiosClient';

export function getMyItemApi(body) {
  return axiosClient.post('item/list_item_with_owner/', body);
}
