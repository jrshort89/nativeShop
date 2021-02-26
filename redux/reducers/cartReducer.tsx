import CartItem from "../../models/cart-item";
import { ADD_ITEM_TO_CART, CartActionTypes } from "../../types/cartActions";

const initialState: CartItem[] = [];

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartItem[] => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const { title, price } = action.item;
      const { quantity } = action;
      const sum = price * quantity;
      const inCart = state.findIndex(
        (item: CartItem) => item.productTitle === title
      );
      if (inCart > -1) {
        state[inCart].quantity += quantity;
        return [...state];
      } else {
        const newCartItem = new CartItem(quantity, price, title, sum);
        return [...state, newCartItem];
      }
    default:
      return state;
  }
};
export default cartReducer;
