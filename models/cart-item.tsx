class CartItem {
  quantity;
  productPrice;
  productTitle;
  sum;
  constructor(
    quantity: number,
    productPrice: number,
    productTitle: string,
    sum: number
  ) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
  }
}

export default CartItem;
