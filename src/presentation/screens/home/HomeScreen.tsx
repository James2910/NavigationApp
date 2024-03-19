import React, { useEffect } from 'react'
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';

import { View, Text, Pressable, useWindowDimensions } from 'react-native'

import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootStackParams } from '../../routes/StackNavigator';
import { IonIcon } from '../../components/shared/IonIcon';

export const HomeScreen = () => {

  const dimensions = useWindowDimensions();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <>
          <Pressable 
            onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
            <IonIcon name='menu-outline' />
          </Pressable>
        </>
      )
    })
  }, [])
  

  return (
    <View style = { globalStyles.container }>
        {/* <Pressable 
        onPress={ () => navigation.navigate('Products' as never)}
        style = { globalStyles.primaryButton }>
          <Text style = { globalStyles.buttonText }>Productos</Text>
        </Pressable> */}
        <PrimaryButton 
          onPress={() => navigation.navigate('Products')}
          label='Productos'
        />

        <PrimaryButton 
          onPress={() => navigation.navigate('Settings')}
          label='Settings'
        />
        
    </View>
  )
}
