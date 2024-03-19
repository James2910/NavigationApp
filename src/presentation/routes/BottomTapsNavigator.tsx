import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/tab1Screen';
import { Tab2Screen } from '../screens/tabs/tab2Screen';
import { Tab3Screen } from '../screens/tabs/tab3Screen';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';
import { globalColors } from '../theme/theme';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={{
          tabBarActiveTintColor: globalColors.primary,
            // headerShown: false,
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent',
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            }
        }}
    >
      <Tab.Screen name="Tap1" options={{ title:'Tab1', tabBarIcon: ({ color }) => (<IonIcon name='bookmark' color={color} />) ,}} component={Tab1Screen} />
      <Tab.Screen name="Tap2" options={{ title:'Top Tab', tabBarIcon: ({ color }) => (<IonIcon name='analytics' color={color} />) ,}} component={TopTabNavigator} />
      <Tab.Screen name="Tap3" options={{ title:'Stack', tabBarIcon: ({ color }) => (<IonIcon name='albums' color={color} />) ,}} component={StackNavigator} />
    </Tab.Navigator>
  );
}