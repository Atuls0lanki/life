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

const initialState = {
  loading: false,
  result: [],
  total: "",
  search: "",
  error: "",
  addLoading: false,
  addonSearch: [],
  lastPage: 1,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
        total: action.total,
        lastPage: action.page,
      };
    case SEARCH_DATA_FAILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SEARCH_ADDON_REQUEST:
      return {
        ...state,
        addLoading: true,
      };
    case SEARCH_ADDON_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addonSearch: action.payload,
        total: action.total,
        lastPage: action.page,
      };
    case SEARCH_ADDON_FAILER:
      return {
        ...state,
        addLoading: false,
        error: action.payload,
      };

    case SET_SEARCH:
      return {
        ...state,
        search: action.data,
      };

    case ADD_ALL_SEARCH:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};
export default SearchReducer;
