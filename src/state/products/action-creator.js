import * as types from "./actions";

import { safetyDataSheetsService } from "../../services";

export type TRY_LOAD_PRODUCTS_ACTION = { type: string };
export type TRY_LOAD_PRODUCTS_SUCCESS_ACTION = { type: string, payload: any };
export type TRY_LOAD_PRODUCTS_FAIL_ACTION = { type: string, payload: any };

export function loadMoreProducts() {
  return async (dispatch, getState) => {
    dispatch(tryLoadProducts());
    var numberOfloadedProducts = getState().product.numberOfloadedProducts;
    var response = await safetyDataSheetsService.getSomeProducts(
      numberOfloadedProducts,
      5
    );
    const result = await response.data;

    if (response.status === 200) {
      debugger;
      dispatch(tryLoadProductsSuccess(result));
    } else {
      dispatch(tryLoadProductsFail("OPPS"));
    }
  };
}

export function tryLoadProducts(): TRY_LOAD_PRODUCTS_ACTION {
  return { type: types.TRY_LOAD_PRODUCTS };
}
export function tryLoadProductsSuccess(
  products
): TRY_LOAD_PRODUCTS_SUCCESS_ACTION {
  return { type: types.TRY_LOAD_PRODUCTS_SUCCESS, payload: products };
}
export function tryLoadProductsFail(
  errorMessage
): TRY_LOAD_PRODUCTS_FAIL_ACTION {
  return { type: types.TRY_LOAD_PRODUCTS_FAIL, payload: errorMessage };
}
