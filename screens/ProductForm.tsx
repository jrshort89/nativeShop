import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import DefaultText from "../components/DefaultText";
import Product from "../models/product";
import { editProduct } from "../redux/actions/productActions";

export interface ProductFormProps {
  route: { params: { product: Product } };
}

export default function ProductForm<ProductFormProps>({ route }) {
  const dispatch = useDispatch();
  const { id, ownerId, title, description, imageUrl, price } =
    route.params !== undefined
      ? route.params.product
      : {
          id: "",
          ownerId: "",
          title: "",
          description: "",
          imageUrl: "",
          price: null,
        };

  const [productTitle, setProductTitle] = useState(title);
  const [productDescription, setProductDescription] = useState(description);
  const [productImage, setProductImage] = useState(imageUrl);
  const [productPrice, setProductPrice] = useState(price);
  const priceInput = (
    <TextInput
      style={styles.input}
      value={productPrice}
      onChangeText={(text) => setProductPrice(text)}
      keyboardType="decimal-pad"
      placeholder="price"
    />
  );
  const productPriceField =
    price === null ? priceInput : <DefaultText>${productPrice}</DefaultText>;

  const onSubmitHandler = () => {
    const newProd = new Product(
      id ? id : Math.floor(Math.random() * 100).toString(),
      ownerId ? ownerId : "Jake",
      productTitle,
      productImage,
      productDescription,
      productPrice
    );
    dispatch(editProduct(newProd));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: productImage }} />
      </View>
      <TextInput
        style={styles.input}
        value={productImage}
        onChangeText={(text) => setProductImage(text)}
        autoCorrect={false}
        placeholder="Image URL"
      />
      <TextInput
        style={styles.input}
        value={productTitle}
        onChangeText={(text) => setProductTitle(text)}
        autoCorrect
        placeholder="Title"
      />
      <DefaultText>Description</DefaultText>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.description}
        value={productDescription}
        onChangeText={(text) => setProductDescription(text)}
        autoCapitalize="sentences"
      />
      {productPriceField}
      <Button title="Submit" onPress={onSubmitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    margin: 10,
  },
  input: {
    margin: 12,
    width: "80%",
    borderBottomWidth: 1,
    fontFamily: "Bangers_400Regular",
    fontSize: 20,
  },
  description: {
    margin: 12,
    height: "10%",
    width: "80%",
    borderBottomWidth: 1,
    fontFamily: "Bangers_400Regular",
    fontSize: 20,
  },
  imageContainer: {
    height: Dimensions.get("window").height / 2.5,
    width: "100%",
    marginTop: 20,
  },
  image: {
    height: "90%",
    width: "100%",
  },
});
