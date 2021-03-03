import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ItemCard from "./ItemCard";
import Product from "../models/product";
import { useSelector } from "react-redux";

export default function ItemList(props: any) {
  const products = useSelector((state) => state.product.products);

  const itemList = (data: any) => {
    return (
      <ItemCard
        price={data.item.price}
        title={data.item.title}
        description={data.item.description}
        imageUrl={data.item.imageUrl}
        item={data.item}
        {...props}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: Product, index: number) => item.id}
        data={products}
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
    marginHorizontal: 10,
  },
});
