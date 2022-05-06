import {
  ACTION_ADD_PRODUCT,
  ACTION_DELETE_PRODUCT,
  ACTION_FETCH_PRODUCTS,
  ACTION_FILTER_PRODUCT,
} from "../actions/products";

const initialState = {
  products: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ACTION_ADD_PRODUCT:
      return { ...state, products: [...state.products, payload.data] };
    case ACTION_DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case ACTION_FILTER_PRODUCT:
      return {
        ...state,
        products: payload
      }
    default:
      return state;
  }
}
