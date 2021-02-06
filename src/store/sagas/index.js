import { takeEvery } from "redux-saga/effects";
import {
  uploadListSaga,
  addProductSaga,
  removeProductSaga,
} from "./groceryList";
import * as actionTypes from "../actions/actionTypes";
export function* watchGroceryList() {
  yield takeEvery(actionTypes.UPLOAD_LIST_INITIATE, uploadListSaga);
  yield takeEvery(actionTypes.ADD_PRODUCT_INITIATE, addProductSaga);
  yield takeEvery(actionTypes.REMOVE_PRODUCT_INITIATE, removeProductSaga);
}
