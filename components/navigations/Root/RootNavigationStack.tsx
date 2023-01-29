import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootNavigationStackParams } from './RootNavigationStackParams';
import { LoginScreen } from './screen/LoginScreen';
import { NotFoundScreen } from './screen/NotFoundScreen';
import BottomRootNavigationStack from '../BottomRoot/BottomRootNavigationStack';


const Stack = createNativeStackNavigator<RootNavigationStackParams>();

const RootNavigationStack: React.FC<unknown> = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={noHeader}/>
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={noHeader}/>
        <Stack.Screen name="TabMenu" component={BottomRootNavigationStack} options={noHeader}/>
    </Stack.Navigator>
  )
}

const noHeader: NativeStackNavigationOptions = {
    headerShown: false,
}

export default RootNavigationStack