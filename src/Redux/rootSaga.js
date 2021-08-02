import { all } from "redux-saga/effects";

import data from "./data/saga";
import search from "./Search/Ssaga";

export default function* rootSaga() {
  return yield all([data, search]);
}
