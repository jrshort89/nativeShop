import CartItem from "../../models/cart-item";
import { CartState } from "../../types/Cart";
import {
  ADD_ITEM_TO_CART,
  CartActionTypes,
  REMOVE_ITEM_FROM_CART,
} from "../../types/cartActions";

const initialState: CartState = {
  cart: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartItem[] => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const { title, price } = action.item;
      const { quantity } = action;
      const sum = price * quantity;
      const inCart = state.cart.findIndex(
        (item: CartItem) => item.productTitle === title
      );
      if (inCart > -1) {
        state.cart[inCart].quantity += quantity;
        const newQty = state.cart[inCart].quantity;
        state.cart[inCart].sum = +(newQty * price).toFixed(2);
        return { ...state, cart: [...state.cart] };
      } else {
        const newCartItem = new CartItem(quantity, price, title, sum);
        return { ...state, cart: [...state.cart, newCartItem] };
      }
    case REMOVE_ITEM_FROM_CART:
      const cartItem = state.cart.findIndex(
        (item: CartItem) => item.productTitle === action.item.productTitle
      );
      if (state.cart[cartItem].quantity === 0) {
        state.cart.splice(cartItem, 1);
        return { ...state, cart: [...state.cart] };
      }
      state.cart[cartItem].quantity -= action.removeQuantity;
      state.cart[cartItem].sum = +(
        state.cart[cartItem].quantity * state.cart[cartItem].productPrice
      ).toFixed(2);
      return { ...state, cart: [...state.cart] };
    default:
      return state;
  }
};
export default cartReducer;
