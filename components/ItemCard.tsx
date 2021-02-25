import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import DefaultText from "./DefaultText";

export default function ItemCard(props: any) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.text}>
          <DefaultText>
            {props.title}
            {"\n"}
          </DefaultText>
          <DefaultText>{props.description}</DefaultText>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2.2,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    fontSize: 20,
  },
});
