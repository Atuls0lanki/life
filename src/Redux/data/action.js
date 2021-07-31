import { DATA_FAILER, DATA_REQUEST, DATA_SUCCESS } from "./type";

export const DataRequest = () => ({
  type: DATA_REQUEST,
});

export const DataSuccess = (data) => ({
  type: DATA_SUCCESS,
  payload: data,
});

export const DataFailer = (error) => ({
  type: DATA_FAILER,
  payload: error,
});
