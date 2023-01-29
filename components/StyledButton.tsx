import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type CustomType = {
    title: string;
}

type StyledButtonProps = React.ComponentProps<typeof TouchableHighlight> & CustomType

export const StyledButton: React.FC<StyledButtonProps> = (props) => {
  return (
    <TouchableHighlight {...props} underlayColor={`transparent`} className="w-11/12 h-[5vh] bg-rose-600 items-center justify-center">
        <Text className="font-bold text-white">{props.title}</Text>
    </TouchableHighlight>
  )
}
