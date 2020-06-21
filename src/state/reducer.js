import { combineReducers } from "redux";

import { productReducer } from "./products/reducer";

const appReducer = combineReducers({
  product: productReducer,
});

export const reducer = (state, action) => {
  return appReducer(state, action);
};
