import { CATEGORY_LIST, CATEGORY_PRODUCTS_LIST } from "./types";

import initialState from "./store";

export default function (state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        listOfCategory: action.payload.listOfCategory,
      };

    case CATEGORY_PRODUCTS_LIST:
      return {
        ...state,
        listOfCategoryProducts: action.payload.listOfCategoryProducts,
      };

    default:
      return {
        ...state,
      };
  }
}
