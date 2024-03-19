import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { globalStyles } from '../../theme/theme'

export const Tab3Screen = () => {
  return (
    <View style={ globalStyles.container }>
      <HamburgerMenu />
      <Text>Tab3Screen</Text>
    </View>
  )
}
