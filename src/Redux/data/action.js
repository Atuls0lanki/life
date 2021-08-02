import {
  ADD_ALL_DATA,
  DATA_ADDON_FAILER,
  DATA_ADDON_REQUEST,
  DATA_ADDON_SUCCESS,
  DATA_FAILER,
  DATA_REQUEST,
  DATA_SUCCESS,
} from "./type";

export const DataRequest = (page) => ({
  type: DATA_REQUEST,
  page: page,
});

export const DataSuccess = (data) => ({
  type: DATA_SUCCESS,
  payload: data,
});

export const DataFailer = (error) => ({
  type: DATA_FAILER,
  payload: error,
});

export const DataAddonRequest = (page) => ({
  type: DATA_ADDON_REQUEST,
  page: page,
});

export const DataAddonSuccess = (data, page) => ({
  type: DATA_ADDON_SUCCESS,
  payload: data,
  page: page,
});

export const DataAddonFailer = (error) => ({
  type: DATA_ADDON_FAILER,
  payload: error,
});

export const AddAllData = (data) => ({
  type: ADD_ALL_DATA,
  payload: data,
});
