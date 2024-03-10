import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
} from "../reducers/productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
