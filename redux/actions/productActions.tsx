import Product from "../../models/product";
import { EDIT_PRODUCT } from "../../types/productActions";

export const editProduct = (product: Product) => ({
  type: EDIT_PRODUCT,
  product: product,
});
