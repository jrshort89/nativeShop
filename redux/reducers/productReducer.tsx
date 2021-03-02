import { EDIT_PRODUCT, ProductActionTypes } from "../../types/productActions";
import { ProductsState } from "../../types/Products";
import PRODUCTS from "../../data/dummy-data";

const initialState: ProductsState = {
  products: PRODUCTS,
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductsState => {
  switch (action.type) {
    case EDIT_PRODUCT:
      console.log("product edited", action.product);
    default:
      return state;
  }
};

export default productReducer;
