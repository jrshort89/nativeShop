import React from "react";
import { View, StyleSheet, Button, Image, Alert } from "react-native";
import DefaultText from "./DefaultText";
import { useDispatch } from "react-redux";
import * as actionTypes from "../redux/actions/cartActions";

export default function ItemDetail(props: any) {
  const { title, price, description, imageUrl } = props.route.params;
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <DefaultText style={styles.text}>{title}</DefaultText>
      <View style={styles.image}>
        <Image style={{ flex: 1 }} source={{ uri: imageUrl }} />
      </View>
      <DefaultText style={styles.text}>
        <DefaultText>${price}</DefaultText>
        {"\n"}
        <DefaultText>{description}</DefaultText>
      </DefaultText>
      <Button
        onPress={() =>
          dispatch(actionTypes.addItemToCart(props.route.params, 1))
        }
        title="Purchase"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "black",
  },
  image: {
    flex: 0.5,
    height: "100%",
    width: "100%",
  },
});
