import { put } from "redux-saga/effects";
import * as actions from "../actions/groceryList";
export function* addProductSaga(action) {
  let name = action.name;
  let priority = action.priority;
  yield put(actions.addProductStart());
  try {
    if (name.length < 1 || name.length > 20) throw "Product name is invalid";
    let intPriority = parseInt(priority);
    if (priority < 1 || priority > 5)
      throw "Priority range must be inside 1 to 5";
    let newProduct = {
      name: name,
      priority: parseInt(priority),
      status: "run out",
    };
    yield put(actions.addProductSuccess(newProduct));
    let oldItems = yield JSON.parse(localStorage.getItem("productList")) || [];
    oldItems.push(newProduct);
    yield localStorage.setItem("productList", JSON.stringify(oldItems));
  } catch (error) {
    console.log(error);
    yield put(actions.addProductFail(error));
  }
}
export function* uploadListSaga(action) {
  yield put(actions.uploadListStart());
  try {
    let listArray = yield JSON.parse(localStorage.getItem("productList")) || [];
    yield put(actions.uploadListSuccess(listArray));
  } catch (err) {
    console.log(err);
    yield put(actions.uploadListFail(err));
  }
}
export function* removeProductSaga(action) {

  yield put(actions.removeProductStart());
  try {
    let newList = action.list;
    console.log(newList);
    yield localStorage.setItem("productList", JSON.stringify(newList));
    yield put(actions.removeProductSuccess(newList));

  } catch (err) {
    console.log(err);
    yield put(actions.removeProductFail(err));
  }
}
