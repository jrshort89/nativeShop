import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ItemDetail from "../components/ItemDetail";
import { Ionicons } from "@expo/vector-icons";

export default function EditScreen(props: any) {
  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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
  const products = useSelector((state) => state.product.products);
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <View style={styles.screen}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ItemDetail {...props} item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
});
