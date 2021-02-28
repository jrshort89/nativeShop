import CartItem from "../models/cart-item";

export interface Cart {
  quantity: number;
  productPrice: number;
  productTitle: string;
  sum: number;
}

export interface CartState {
  cart: CartItem[];
}
