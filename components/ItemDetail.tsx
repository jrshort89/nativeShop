import React from "react";
import { View, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";

export default function ItemDetail() {
  return (
    <View style={styles.screen}>
      <DefaultText style={styles.text}>Item Details, yo.</DefaultText>
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
    color: "limegreen",
  },
});
