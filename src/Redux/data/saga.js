import { put, call, all, takeLatest } from "redux-saga/effects";
import { AllDataService } from "../AlldataApi";
import { DataFailer, DataSuccess } from "./action";
import { DATA_REQUEST } from "./type";

function* fetchAllData() {
  try {
    const runApi = yield call(AllDataService);
    yield put(DataSuccess(runApi));
  } catch (error) {
    yield put(DataFailer(error));
  }
}

export default all([takeLatest(DATA_REQUEST, fetchAllData)]);
