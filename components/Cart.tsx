import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CartItem from "../models/cart-item";
import CartItemPreview from "./CartItemPreview";
import DefaultText from "./DefaultText";
import { Ionicons } from "@expo/vector-icons";
import { CartState } from "../types/Cart";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

export default function Cart() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Ionicons
            style={{ padding: 10 }}
            name="ios-menu"
            size={25}
            color="rgb(0, 122, 255)"
          />
        </TouchableOpacity>
      );
    },
  });
  const cart = useSelector((state: CartState) => state.cart.cart);

  let mappedCart = (item: CartItem): JSX.Element => {
    return <CartItemPreview navigation={navigation} item={item} />;
  };

  const cartTotal = cart
    .reduce((a: number, b: CartItem) => {
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
          renderItem={(): any => mappedCart} // remove any and try and solve that bug
          keyExtractor={(item: CartItem) => item.productTitle}
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
