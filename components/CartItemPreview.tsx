import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import data from "../data/dummy-data";
import CartItem from "../models/cart-item";
import DefaultText from "./DefaultText";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../redux/actions/cartActions";
import Product from "../models/product";

export interface CardItemPreviewProps {
  item: CartItem;
}

export default function CartItemPreview<CardItemPreviewProps>({
  item,
  navigation,
}) {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();
  item = item.item;

  let cardHeight = {
    height: showDetail
      ? Dimensions.get("window").height / 3
      : Dimensions.get("window").height / 8,
  };

  const productDetail: Product = data?.find(
    (product) => product.title === item.productTitle
  )!;

  const detailView = showDetail ? (
    <View style={{ overflow: "hidden", height: "70%" }}>
      <Image source={{ uri: productDetail?.imageUrl }} style={styles.image} />
      <DefaultText>{productDetail?.description}</DefaultText>
    </View>
  ) : null;
  return (
    <View style={{ width: "100%" }}>
      <View style={{ ...styles.card, ...cardHeight }} key={item.productTitle}>
        <View style={{ height: "100%" }}>
          <View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Item Detail", { ...productDetail });
                }}
              >
                <DefaultText>{item.productTitle}</DefaultText>
              </TouchableOpacity>
              <DefaultText>{item.productPrice}</DefaultText>
            </View>
          </View>
          {detailView}
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Feather
                onPress={() => setShowDetail(!showDetail)}
                name="more-horizontal"
                size={30}
                color="rgb(0, 122, 255)"
              />
              <Ionicons
                name="remove-outline"
                size={30}
                onPress={() => dispatch(removeItemFromCart(item, 1))}
              />
              <Ionicons
                name="add-outline"
                size={30}
                onPress={() => dispatch(addItemToCart(productDetail, 1))}
              />
              <View style={{ alignItems: "flex-end" }}>
                <DefaultText>x {item.quantity}</DefaultText>
                <DefaultText>{item.sum}</DefaultText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  image: {
    height: "80%",
    width: "100%",
  },
});
