import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ItemList from "../components/ItemList";
import { HomeNavProps } from "../navigators/HomeParamList";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

export default function Home({ navigation }: HomeNavProps<"Home">) {
  navigation.setOptions({
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons
            style={{ padding: 10 }}
            name="cart"
            size={25}
            color="rgb(0, 122, 255)"
          />
        </TouchableOpacity>
      );
    },
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
  return (
    <View style={styles.screen} testID="homeScreen">
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
