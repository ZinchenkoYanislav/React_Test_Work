import {
  ACTION_ADD_PRODUCT,
  ACTION_DELETE_PRODUCT,
  ACTION_FETCH_PRODUCTS,
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
      console.log(payload);
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
