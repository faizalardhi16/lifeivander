import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { RootNavigationStackScreenProps } from '../../StackScreenProps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OutlinedTextInputWithIcon } from '../../../OutlinedTextInputWithIcon';
import { MaterialIcons } from '@expo/vector-icons'; 
import { tintColorSemiGray } from '../../../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyledButton } from '../../../StyledButton';


export const LoginScreen: React.FC<RootNavigationStackScreenProps<"LoginScreen">> = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView className="bg-white flex-1 items-center justify-center">
        <View className=' w-full items-center justify-start bg-white mt-6'>
          <View className="w-11/12">
            <Text className='font-bold text-2xl'>Welcome Back,</Text>
            <Text className="text-sm text-stone-400">Log in now to continues</Text>
          </View>

          <View className='w-11/12 items-center justify-center mt-4'>
            <Image source={require("../../../../assets/images/lost.png")} className="w-80 h-80"/>
          </View>

        
            <View className='w-11/12 my-2'>
              <Text className="text-stone-400 mb-1">Email Address</Text>
              <OutlinedTextInputWithIcon icon={
                <MaterialIcons name="email" size={24} color={tintColorSemiGray} />
              }
                placeholder="Enter your email address"
              />
            </View>

            <View className='w-11/12 my-2'>
              <Text className="text-stone-400 mb-1">Password</Text>
              <OutlinedTextInputWithIcon icon={
                <FontAwesome5 name="lock" size={24} color={tintColorSemiGray} />
              }
                secureTextEntry={true}
                placeholder="Enter your password"
              />
            </View>


          <View className="w-11/12 items-end">
              <TouchableOpacity onPress={() => alert("YES")}>
                <Text className="text-blue-500">Forgot Password ?</Text>
              </TouchableOpacity>
          </View>


          <StyledButton title="Login" 
            className="bg-[#30336b] h-12 rounded-lg mt-4" 
            onPress={() => navigation.replace("TabMenu")}
          />

        </View>  
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}