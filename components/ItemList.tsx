import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ItemCard from "./ItemCard";
import dummyData from "../data/dummy-data";
import Product from "../models/product";

export default function ItemList() {
  const itemList = (data: any) => {
    return (
      <ItemCard title={data.item.title} description={data.item.description} />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: Product, index: number) => item.id}
        data={dummyData}
        renderItem={itemList}
        style={{ width: "100%" }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
