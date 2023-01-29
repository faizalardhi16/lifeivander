import { View, Text, TextInput } from 'react-native'
import React from 'react'

type CustomInput = {
    icon: JSX.Element;
}

type OutlinedTextInputWithIconProps = React.ComponentProps<typeof TextInput> & CustomInput


export const OutlinedTextInputWithIcon: React.FC<OutlinedTextInputWithIconProps>
= (props) => {
  return (
    <View className="bg-white w-full h-12 px-2 items-center flex-row border-[1px] border-stone-300 rounded-lg">
        <View className="w-1/12 items-start justify-center">
            {props.icon}
        </View>
        <TextInput {...props} className="w-11/12 px-2"/>
    </View>
  )
}

