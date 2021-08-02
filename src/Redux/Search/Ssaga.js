import { all, call, put, takeLatest } from "redux-saga/effects";
import { SearchService } from "../Api/SearchApi";
import {
  SearchAddonFailer,
  SearchAddonSuccess,
  SearchFailer,
  SearchSuccess,
} from "./Saction";
import { SEARCH_ADDON_REQUEST, SEARCH_DATA_REQUEST } from "./Stype";

function* Searchdata({ search, page }) {
  try {
    console.log(page);
    const runApi = yield call(SearchService, search, page);
    if (runApi.stat === "ok") {
      yield put(SearchSuccess(runApi.photos.photo, runApi.photos.total, page));
    } else {
      yield put(SearchFailer(runApi));
    }
  } catch (error) {
    yield put(SearchFailer(error));
  }
}

function* FetchnewSearch({ search, page }) {
  try {
    const runApi = yield call(SearchService, search, page);
    if (runApi.stat === "ok") {
      yield put(
        SearchAddonSuccess(runApi.photos.photo, runApi.photos.total, page)
      );
    } else {
      yield put(SearchAddonFailer(runApi));
    }
  } catch (error) {
    yield put(SearchAddonFailer(error));
  }
}

export default all([
  takeLatest(SEARCH_DATA_REQUEST, Searchdata),
  takeLatest(SEARCH_ADDON_REQUEST, FetchnewSearch),
]);
