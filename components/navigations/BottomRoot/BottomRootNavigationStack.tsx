import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomRootNavigationStackParams } from './BottomRootNavigationStackParams';
import { MainNavigationStack } from '../Main/MainNavigationStack';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<BottomRootNavigationStackParams>();

const BottomRootNavigationStack: React.FC<unknown> = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={MainNavigationStack} options={homeTabOptions}/>
    </Tab.Navigator>
  )
}

const homeTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Beranda',
  tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="home" color={color} size={size} />
  ),
};


export default BottomRootNavigationStack