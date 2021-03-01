import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CartItem from "../models/cart-item";
import CartItemPreview from "./CartItemPreview";
import DefaultText from "./DefaultText";

export default function Cart({ navigation }) {
  const cart = useSelector((state) => state.cart);
  let mappedCart;
  mappedCart = (item: CartItem) => {
    return <CartItemPreview navigation={navigation} item={item} />;
  };

  const cartTotal = cart
    .reduce((a, b) => {
      return a + b.sum;
    }, 0)
    .toFixed(2);

  if (cart?.length === 0) {
    return (
      <View style={{ ...styles.screen, flex: 1 }}>
        <DefaultText>Nothing in cart.</DefaultText>
      </View>
    );
  }

  return (
    <View style={{ height: "94%" }}>
      <View style={styles.screen}>
        <DefaultText style={{ fontSize: 30 }}>total: ${cartTotal}</DefaultText>
      </View>
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={mappedCart}
          keyExtractor={(item) => item.productTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  list: {
    marginHorizontal: 10,
  },
});
