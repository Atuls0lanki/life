import {
  ADD_ALL_SEARCH,
  SEARCH_ADDON_FAILER,
  SEARCH_ADDON_REQUEST,
  SEARCH_ADDON_SUCCESS,
  SEARCH_DATA_FAILER,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SET_SEARCH,
} from "./Stype";

export const SearchRequest = (search, page) => ({
  type: SEARCH_DATA_REQUEST,
  search: search,
  page: page,
});
export const SearchSuccess = (result, total, page) => ({
  type: SEARCH_DATA_SUCCESS,
  result: result,
  total: total,
  page: page,
});
export const SearchFailer = (error) => ({
  type: SEARCH_DATA_FAILER,
  payload: error,
});

export const SearchAddonRequest = (search, page) => ({
  type: SEARCH_ADDON_REQUEST,
  search: search,
  page: page,
});

export const SearchAddonSuccess = (data, total, page) => ({
  type: SEARCH_ADDON_SUCCESS,
  payload: data,
  total: total,
  page: page,
});

export const SearchAddonFailer = (error) => ({
  type: SEARCH_ADDON_FAILER,
  payload: error,
});

export const SetSearch = (data) => ({
  type: SET_SEARCH,
  data: data,
});
export const AddAllSearch = (data) => ({
  type: ADD_ALL_SEARCH,
  payload: data,
});
