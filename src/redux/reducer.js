import { PRODUCTS_LIST } from "./types";

import initialState from "./store";

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
        listOfProducts: action.payload.listOfProducts,
      };

    default:
      return {
        ...state,
      };
  }
}
