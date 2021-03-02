import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import ShopNav from "./navigators/ShopNav";
import cartReducer from "./redux/reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./redux/reducers/productReducer";

export type AppState = ReturnType<typeof cartReducer>;

export default function App() {
  const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
  });
  const store = createStore(reducers, composeWithDevTools());

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
