import { ProductInitialState, ProductState } from "./products/state";

export type State = {
  favourite: ProductState,
};

export const intialState = {
  favourite: ProductInitialState,
};
