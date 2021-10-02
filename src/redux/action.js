import {
  CATEGORY_LIST,
  CATEGORY_PRODUCTS_LIST,
  RANDOM_PRODUCTS_LIST,
} from "./types";

// get Category List
export const getCategoryList = (listOfCategory) => (dispatch) => {
  dispatch({
    type: CATEGORY_LIST,
    payload: { listOfCategory },
  });
};

// get Category Products List
export const getCategoryProductsList =
  (listOfCategoryProducts) => (dispatch) => {
    dispatch({
      type: CATEGORY_PRODUCTS_LIST,
      payload: { listOfCategoryProducts },
    });
  };

// get Random Products List
export const getRandomProductsList = (listOfRandomProducts) => (dispatch) => {
  dispatch({
    type: RANDOM_PRODUCTS_LIST,
    payload: { listOfRandomProducts },
  });
};
