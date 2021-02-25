import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";
import ItemDetail from "../components/ItemDetail";

export default function TabNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Item Detail" component={ItemDetail} />
    </Tab.Navigator>
  );
}
