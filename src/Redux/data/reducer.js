import {
  ADD_ALL_DATA,
  DATA_ADDON_FAILER,
  DATA_ADDON_REQUEST,
  DATA_ADDON_SUCCESS,
  DATA_FAILER,
  DATA_REQUEST,
  DATA_SUCCESS,
} from "./type";

const initialState = {
  loading: false,
  addLoading: false,
  addonData: [],
  lastPage: 1,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DATA_FAILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DATA_ADDON_REQUEST:
      return {
        ...state,
        addLoading: true,
      };
    case DATA_ADDON_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addonData: action.payload,
        lastPage: action.page,
      };
    case DATA_ADDON_FAILER:
      return {
        ...state,
        addLoading: false,
        error: action.payload,
      };

    case ADD_ALL_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default dataReducer;
