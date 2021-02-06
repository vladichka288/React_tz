import * as actionTypes from "../actions/actionTypes";
const initialState = {
  list: [],
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_START: {
      return { ...state, error: null };
    }
    case actionTypes.ADD_PRODUCT_FAIL: {
      return { ...state, error: action.error };
    }
    case actionTypes.ADD_PRODUCT_SUCCESS: {
      return { list: [...state.list, action.product], error: null };
    }
    case actionTypes.UPLOAD_LIST_START: {
        return { ...state, error: null };
      }
      case actionTypes.UPLOAD_LIST_FAIL: {
        return { ...state, error: action.error };
      }
      case actionTypes.UPLOAD_LIST_SUCCESS: {
        return { list: action.list, error: null };
      }
      case actionTypes.REMOVE_PRODUCT_START: {
        return { ...state, error: null };
      }
      case actionTypes.REMOVE_PRODUCT_FAIL: {
        return { ...state, error: action.error };
      }
      case actionTypes.REMOVE_PRODUCT_SUCCESS: {
        return { list: action.list, error: null };
      }
    default:
      return state;
  }
};
export default reducer;
