import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { MainNavigationStackParams } from './MainNavigationStackParams';
import { HomeScreen } from '../BottomRoot/screen/HomeScreen';

const Stack = createNativeStackNavigator<MainNavigationStackParams>();

export const MainNavigationStack: React.FC<unknown> = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={noHeader}/>
    </Stack.Navigator>
  )
}

const noHeader: NativeStackNavigationOptions = {
  headerShown: false
}

