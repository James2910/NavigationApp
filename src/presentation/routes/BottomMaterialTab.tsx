import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Tab1Screen } from '../screens/tabs/tab1Screen';
import { Tab3Screen } from '../screens/tabs/tab3Screen';
import { TopTabNavigator } from './TopTabsNavigator';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { StackNavigator } from './StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Tab = createMaterialBottomTabNavigator();

export const BottomMaterialTab = () => {
  
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: true,
    })
  }, [])

  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"  
        barStyle={{ backgroundColor: '#694fad', }}
        
          // tabBarOption={{
          //   tabBarLabelStyle: {
          //       marginBottom: 5,
          //   },
          //   headerStyle: {
          //       elevation: 0,
          //       borderColor: 'transparent',
          //       shadowColor: 'transparent',
          //   },
          //   tabBarStyle: {
          //       borderTopWidth: 0,
          //       elevation: 0,
          //   }
          // }}
      >
        <Tab.Screen name="Tap1" options={{ title:'Uno', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab1</Text>) ,}} component={Tab1Screen} />
        <Tab.Screen name="Tap2" options={{ title:'Dos', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab2</Text>) ,}} component={TopTabNavigator} />
        <Tab.Screen name="Tap3" options={{ title:'Tres', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab3</Text>) ,}} component={StackNavigator} />
      </Tab.Navigator>
      </>
  );
}