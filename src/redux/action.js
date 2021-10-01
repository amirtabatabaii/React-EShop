import { PRODUCTS_LIST } from "./types";

// get Products List
export const getProductsDetails = (list) => (dispatch) => {
  dispatch({
    type: PRODUCTS_LIST,
    payload: { list },
  });
};
