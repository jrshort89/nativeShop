import CartItem from "../models/cart-item";
import Product from "../models/product";

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export interface addItemToCart {
  type: typeof ADD_ITEM_TO_CART;
  item: Product;
  quantity: number;
}
export interface removeItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART;
  item: CartItem;
  quantity: number;
}

export type CartActionTypes = addItemToCart | removeItemFromCart;

export type AppActions = CartActionTypes;
