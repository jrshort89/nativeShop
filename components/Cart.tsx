import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../models/cart-item";
import DefaultText from "./DefaultText";

export default function Cart() {
  const cart = useSelector((state) => state);
  const mappedCart = cart?.map((item: CartItem) => (
    <View key={item.productTitle}>
      <DefaultText>{item.productTitle}</DefaultText>
      <DefaultText>{item.quantity}</DefaultText>
    </View>
  ));

  return <View style={styles.screen}>{mappedCart}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
