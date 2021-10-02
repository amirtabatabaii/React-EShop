import {
  CATEGORY_LIST,
  CATEGORY_PRODUCTS_LIST,
  RANDOM_PRODUCTS_LIST,
} from "./types";

export default function (state, action) {
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

    case RANDOM_PRODUCTS_LIST:
      return {
        ...state,
        listOfRandomProducts: action.payload.listOfRandomProducts,
      };

    default:
      return {
        ...state,
      };
  }
}
