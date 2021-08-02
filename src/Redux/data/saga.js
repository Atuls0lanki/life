import { put, call, all, takeLatest } from "redux-saga/effects";
import { AllDataService } from "../Api/AlldataApi";
import {
  DataAddonFailer,
  DataAddonSuccess,
  DataFailer,
  DataSuccess,
} from "./action";
import { DATA_ADDON_REQUEST, DATA_REQUEST } from "./type";

function* fetchAllData({ page }) {
  try {
    const runApi = yield call(AllDataService, page);
    if (runApi.stat === "ok") {
      yield put(DataSuccess(runApi.photos.photo));
    } else {
      yield put(DataFailer(runApi));
    }
  } catch (error) {
    yield put(DataFailer(error));
  }
}

function* Fetchnewdata({ page }) {
  try {
    const runApi = yield call(AllDataService, page);
    if (runApi.stat === "ok") {
      yield put(DataAddonSuccess(runApi.photos.photo, page));
    } else {
      yield put(DataAddonFailer(runApi));
    }
  } catch (error) {
    yield put(DataAddonFailer(error));
  }
}

export default all([
  takeLatest(DATA_REQUEST, fetchAllData),
  takeLatest(DATA_ADDON_REQUEST, Fetchnewdata),
]);
