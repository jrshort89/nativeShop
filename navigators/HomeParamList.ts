import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

export type Props = StackScreenProps<RootStackParamList, "Profile">;

export type HomeParamList = {
  Home: undefined;
  "Item Detail": undefined;
  Cart: undefined;
  toggleDrawer: undefined;
  Edit: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation:
    | DrawerNavigationProp<HomeParamList, T>
    | StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
