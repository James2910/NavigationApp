import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

export const ProfileScreen = () => {

  const { top } =  useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top,
    }}>

        <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>

        <PrimaryButton 
          onPress={ () => navigation.navigate('Home')}
          label='Home'
        />

        <PrimaryButton 
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )}
          label='Abrir menú'
        />

    </View>
  )
}
