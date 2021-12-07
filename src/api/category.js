import axiosClient from './axiosClient';

export function getGameApi() {
  return axiosClient.get('category/list_category/');
}

export function getCategoryApi() {
  return axiosClient.get('sub_category/list_sub_category/');
}

export function getCategoryWithIdApi(body) {
  return axiosClient.post('sub_category/list_sub_category_withId/', body);
}
