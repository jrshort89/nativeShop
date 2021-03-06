import React from "react";
import { Text, StyleSheet } from "react-native";

export default function DefaultText(props: any) {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Bangers_400Regular",
    fontSize: 20,
  },
});
