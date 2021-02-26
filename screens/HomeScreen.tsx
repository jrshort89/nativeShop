import React from "react";
import { View, StyleSheet } from "react-native";
import ItemList from "../components/ItemList";
import { HomeNavProps } from "../navigators/HomeParamList";

export default function Home({ navigation }: HomeNavProps<"Home">) {
  return (
    <View style={styles.screen}>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <ItemList {...navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
