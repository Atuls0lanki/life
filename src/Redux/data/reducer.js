import { DATA_FAILER, DATA_REQUEST, DATA_SUCCESS } from "./type";

const initialState = {
  loading: false,
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

    default:
      return state;
  }
};
export default dataReducer;
