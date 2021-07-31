import { all } from "redux-saga/effects";

import data from "./data/saga";

export default function* rootSaga() {
  return yield all([data]);
}
