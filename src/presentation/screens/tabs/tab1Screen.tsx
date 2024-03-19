import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { globalStyles } from '../../theme/theme';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {

  return (
    <>
      <HamburgerMenu />
      <View style={ globalStyles.container }>
        <Text>Tab1Screen</Text>
        <IonIcon name='heart-outline' size={100} />
      </View>
    </>
  )
}
