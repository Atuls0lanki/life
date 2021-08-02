import { combineReducers } from "redux";
import dataReducer from "./data/reducer";
import SearchReducer from "./Search/Sreducer";

const rootReducer = combineReducers({
  data: dataReducer,
  search: SearchReducer,
});

export default rootReducer;
