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
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.product.id
      );
      if (productIndex < 0) {
        return { ...state, products: [...state.products, action.product] };
      } else {
        state.products[productIndex] = action.product;
        return { ...state, products: [...state.products] };
      }
    default:
      return state;
  }
};

export default productReducer;
