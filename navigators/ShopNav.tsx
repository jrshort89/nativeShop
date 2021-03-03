import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import ItemDetail from "../components/ItemDetail";
import { HomeParamList } from "./HomeParamList";
import Cart from "../components/Cart";
import EditScreen from "../screens/EditScreen";
import { CartParamList } from "./CartParams";
import ProductForm from "../screens/ProductForm";

const options = {
  fontFamily: "Bangers_400Regular",
  fontSize: 22,
};

const stackOptions = {
  headerTitleStyle: { fontFamily: "Bangers_400Regular", fontSize: 22, flex: 1 },
};

const HomeNav = () => {
  const Stack = createStackNavigator<HomeParamList>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={stackOptions} />
      <Stack.Screen
        name="Item Detail"
        component={ItemDetail}
        options={stackOptions}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ ...stackOptions, headerTitle: "Cart" }}
      />
    </Stack.Navigator>
  );
};

const CartNav = () => {
  const Stack = createStackNavigator<CartParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={stackOptions} />
      <Stack.Screen name="Home" component={HomeNav} options={stackOptions} />
    </Stack.Navigator>
  );
};

const EditNav = () => {
  const Stack = createStackNavigator<HomeParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Edit" component={EditScreen} options={stackOptions} />
      <Stack.Screen name="Cart" component={Cart} options={stackOptions} />
      <Stack.Screen name="Home" component={HomeNav} options={stackOptions} />
      <Stack.Screen
        name="Product Form"
        component={ProductForm}
        options={stackOptions}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator<HomeParamList>();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{ labelStyle: options }}
        screenOptions={{
          headerStyle: { flex: 1, height: "100%", width: "100%" },
        }}
      >
        <Drawer.Screen
          name={"Home"}
          component={HomeNav}
          options={stackOptions}
        />
        <Drawer.Screen
          name={"Cart"}
          component={CartNav}
          options={stackOptions}
        />
        <Drawer.Screen name="Edit" component={EditNav} options={stackOptions} />
        <Drawer.Screen
          name="New Product"
          component={ProductForm}
          options={stackOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;
