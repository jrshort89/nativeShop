import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";
import ItemDetail from "../components/ItemDetail";
import { HomeParamList } from "./HomeParamList";
import Cart from "../components/Cart";

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
    <Stack.Navigator>
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
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={stackOptions} />
    </Stack.Navigator>
  );
};

const ShopNav = () => {
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const RootStack = () => {
  const Stack = createStackNavigator<HomeParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const ItemDetailNav = () => {
  const Tab = createBottomTabNavigator<HomeParamList>();
  return (
    <Tab.Navigator tabBarOptions={{ labelStyle: options }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Item Detail" component={ItemDetail} />
    </Tab.Navigator>
  );
};

export default ShopNav;
