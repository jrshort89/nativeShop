import React from "react";
import { View, StyleSheet, Button, Image, Alert } from "react-native";
import DefaultText from "./DefaultText";

export default function ItemDetail(props: any) {
  const { title, price, description, imageUrl } = props.route.params;
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
        onPress={() => Alert.alert("You basically just bought a " + title)}
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
