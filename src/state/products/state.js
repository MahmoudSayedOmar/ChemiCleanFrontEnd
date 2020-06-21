export interface ProductState {
  products: Array;
  lastSavedProductId: Number;
  loading: Boolean;
  numberOfloadedProducts: Number;
  errorMessage: String;
}

export const ProductInitialState: ProductState = {
  products: [],
  lastSavedProductId: undefined,
  loading: false,
  numberOfloadedProducts: 0,
  errorMessage: "",
};
