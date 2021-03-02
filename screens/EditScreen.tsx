import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ItemDetail from "../components/ItemDetail";

export default function EditScreen() {
  const products = useSelector((state) => state.product.products);
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <View style={styles.screen}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ItemDetail item={item} />}
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
