import Product from "../models/product";

export const EDIT_PRODUCT = "EDIT_PRODUCT";

export interface editProduct {
  type: typeof EDIT_PRODUCT;
  product: Product;
}

export type ProductActionTypes = editProduct;

export type AppActions = ProductActionTypes;
