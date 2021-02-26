import React from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DefaultText from "./DefaultText";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addItemToCart } from "../redux/actions/cartActions";

export default function ItemCard(props: any) {
  const { title, price, description } = props;
  const dispatch: Dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>
            <DefaultText>{title}</DefaultText>
            <DefaultText>
              {" $" + price}
              {"\n"}
              {"\n"}
            </DefaultText>
            <DefaultText>{description}</DefaultText>
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigate("Item Detail", { ...props })}
        >
          <Feather name="more-horizontal" size={24} color="rgb(0, 122, 255)" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(addItemToCart(props.item, 1))}
        >
          <Ionicons name="cart" size={20} color="rgb(0, 122, 255)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2.2,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    overflow: "scroll",
  },
  text: {
    fontSize: 20,
  },
  button: {
    color: "rgb(0, 122, 255)",
    fontSize: 20,
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    shadowRadius: 2,
    shadowColor: "grey",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
