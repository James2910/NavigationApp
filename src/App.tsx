import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTapsNavigator';

export const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
      <SideMenuNavigator/>
      {/* <BottomTabsNavigator /> */}

    </NavigationContainer>
  )
}
