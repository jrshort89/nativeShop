import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import ShopNav from "./navigators/ShopNav";
import cartReducer from "./redux/reducers/cartReducer";

export type AppState = ReturnType<typeof cartReducer>;

export default function App() {
  const store = createStore(cartReducer);

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ShopNav />
    </Provider>
  );
}
