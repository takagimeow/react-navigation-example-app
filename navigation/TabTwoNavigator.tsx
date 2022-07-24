import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabTwoStackParamList } from "../types";
import { GammaScreen } from "../screens/TabTwo/GammaScreen";
import { DeltaScreen } from "../screens/TabTwo/DeltaScreen";

const TabTwoStack = createNativeStackNavigator<TabTwoStackParamList>();

export function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <TabTwoStack.Screen name="Gamma" component={GammaScreen} />
      <TabTwoStack.Screen name="Delta" component={DeltaScreen} />
    </TabTwoStack.Navigator>
  );
}
