import CartItem from "../../models/cart-item";
import Product from "../../models/product";
import {
  AppActions,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../../types/cartActions";

export const addItemToCart = (item: Product, quantity: number): AppActions => ({
  type: ADD_ITEM_TO_CART,
  item: item,
  quantity: quantity,
});

export const removeItemFromCart = (item: CartItem) => ({
  type: REMOVE_ITEM_FROM_CART,
  item,
  quantity: item.quantity,
  sum: item.sum,
});
