import React from "react";

import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import ShopNav from "./navigators/ShopNav";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ShopNav />;
}
