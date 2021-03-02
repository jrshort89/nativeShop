import { RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export type CartParamList = {
  Home: undefined;
  Edit: undefined;
  Cart: undefined;
};

export type CartNavProps<T extends keyof CartParamList> = {
  navigation:
    | StackNavigationProp<CartParamList, T>
    | DrawerNavigationProp<CartParamList, T>;
  route: RouteProp<CartParamList, T>;
};
