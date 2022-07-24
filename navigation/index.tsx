import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';

export function Navigation() {
  return (
    <NavigationContainer>
      {/* RootNavigatorコンポーネント */}
      <RootNavigator />
    </NavigationContainer>
  )
}