import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigationStack from './Root/RootNavigationStack';

const Navigation: React.FC<unknown> = () => {
  return (
    <NavigationContainer>
        <RootNavigationStack />
    </NavigationContainer>
  )
}

export default Navigation