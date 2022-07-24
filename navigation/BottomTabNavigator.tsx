import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import { TabOneNavigator } from "./TabOneNavigator";
import { TabTwoNavigator } from "./TabTwoNavigator";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen name="TabOne" component={TabOneNavigator} />
      <BottomTab.Screen name="TabTwo" component={TabTwoNavigator} />
    </BottomTab.Navigator>
  );
}
