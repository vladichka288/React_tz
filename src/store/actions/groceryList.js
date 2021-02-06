import * as actionTypes from "./actionTypes";
export const addProductStart = () => {
  return { type: actionTypes.ADD_PRODUCT_START };
};
export const addProductFail = (error) => {
  return { type: actionTypes.ADD_PRODUCT_FAIL, error: error };
};
export const addProductSuccess = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    product: product,
  };
};
export const addProduct = (name, priority) => {
  return {
    type: actionTypes.ADD_PRODUCT_INITIATE,
    name: name,
    priority: priority,
  };
};
//
//
export const uploadListStart = () => {
  return { type: actionTypes.UPLOAD_LIST_START };
};
export const uploadListFail = (error) => {
  return { type: actionTypes.UPLOAD_LIST_FAIL, error: error };
};
export const uploadListSuccess = (list) => {
  return {
    type: actionTypes.UPLOAD_LIST_SUCCESS,
    list: list,
  };
};
export const uploadList = () => {
  return {
    type: actionTypes.UPLOAD_LIST_INITIATE,
  };
};
//
//
export const removeProductStart = () => {
  return { type: actionTypes.REMOVE_PRODUCT_START };
};
export const removeProductFail = (error) => {
  return { type: actionTypes.REMOVE_PRODUCT_FAIL, error: error };
};
export const removeProductSuccess = (list) => {
  return { type: actionTypes.REMOVE_PRODUCT_SUCCESS, list: list };
};
export const removeProduct = (list) => {
  return { type: actionTypes.REMOVE_PRODUCT_INITIATE, list: list };
};
