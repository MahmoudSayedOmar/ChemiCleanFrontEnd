// @Flow
import { ProductState, ProductInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.TRY_LOAD_PRODUCTS_ACTION
  | actions.TRY_LOAD_PRODUCTS_SUCCESS_ACTION
  | actions.TRY_LOAD_PRODUCTS_FAIL_ACTION;

export function productReducer(
  state: ProductState = ProductInitialState,
  action: Action
): ProductState {
  switch (action.type) {
    case types.TRY_LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.TRY_LOAD_PRODUCTS_SUCCESS: {
      const _numberOfloadedProducts = state.numberOfloadedProducts + 20;
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload],
        numberOfloadedProducts: _numberOfloadedProducts,
      };
    }
    case types.TRY_LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
}
