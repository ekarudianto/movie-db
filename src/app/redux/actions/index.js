import { UPDATE_PAGINATION, UPDATE_LIST, UPDATE_SEARCH } from './constant';

export const updatePagination = (payload) => {
  return { type: UPDATE_PAGINATION, payload };
};

export const updateList = (payload) => {
  return { type: UPDATE_LIST, payload };
};

export const updateSearch = (payload) => {
  return { type: UPDATE_SEARCH, payload };
};