import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import DefaultText from "./DefaultText";
import { useDispatch } from "react-redux";
import * as actionTypes from "../redux/actions/cartActions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function ItemDetail(props: any) {
  const product =
    props.route?.params === undefined ? props.item : props.route.params;
  const { title, price, description, imageUrl } = product;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <DefaultText>{title}</DefaultText>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.price}>
        <DefaultText>{description}</DefaultText>
        <View>
          <DefaultText>${price}</DefaultText>
        </View>
      </View>
      {props.route?.params ? (
        <TouchableOpacity
          onPress={() =>
            dispatch(actionTypes.addItemToCart(props.route.params, 1))
          }
        >
          <DefaultText style={{ color: "rgb(0, 122, 255)" }}>
            Purchase
          </DefaultText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product Form", { product: props.item })
          }
        >
          <DefaultText style={{ color: "red" }}>Edit</DefaultText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    marginVertical: 10,
  },
  imageContainer: {
    height: Dimensions.get("window").height / 2.5,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
