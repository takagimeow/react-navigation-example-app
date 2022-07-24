import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabOneStackParamList } from "../types";
import { AlphaScreen } from "../screens/TabOne/AlphaScreen";
import { BetaScreen } from "../screens/TabOne/BetaScreen";

const TabOneStack = createNativeStackNavigator<TabOneStackParamList>();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <TabOneStack.Screen
        name="Alpha"
        component={AlphaScreen}
      />
      <TabOneStack.Screen
        name="Beta"
        component={BetaScreen}
      />
    </TabOneStack.Navigator>
  )
}