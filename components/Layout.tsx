import { View, Text } from 'react-native'
import React from 'react'

export interface LayoutProps{
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default Layout