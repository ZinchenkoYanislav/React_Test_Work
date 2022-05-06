import "../../api";
import api from "../../api";

const API_URL_PRODUCTS = "products/";

export const ACTION_FETCH_PRODUCTS = "ACTION_FETCH_PRODUCTS";
export function fetchProducts() {
  return function (dispatch) {
    api.get(API_URL_PRODUCTS).then((date) => {
      dispatch({
        type: ACTION_FETCH_PRODUCTS,
        payload: date.data,
      });
    });
  };
}

export const ACTION_ADD_PRODUCT = "ACTION_ADD_PRODUCT";
export function addProduct(payload) {
  return function (dispatch) {
    api
      .post(API_URL_PRODUCTS, {
        name: payload.name,
        count: payload.count,
        weight: payload.weight,
        size: payload.size,
      })
      .then((date) => {
        dispatch({
          type: ACTION_ADD_PRODUCT,
          payload: date,
        });
      });
  };
}

export const ACTION_DELETE_PRODUCT = "ACTION_DELETE_PRODUCT";
export function deleteProduct(payload) {
  return function (dispatch) {
    api.delete(API_URL_PRODUCTS + payload).then((date) => {
      dispatch({
        type: ACTION_DELETE_PRODUCT,
        payload: date.data.id,
      });
    });
  };
}
