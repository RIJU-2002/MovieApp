import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { Link } from 'expo-router'

interface Props{
    placeholder:string,
    onPress?:()=>void,
    value?:string,
    onChangeText?:(text:string)=>void,
    onClear?:()=>void
}

const SearchBar = ({placeholder,onPress,value,onChangeText,onClear}:Props) => {
  return (
    
      <View className='flex-row items-center bg-white rounded-full px-5 py-4 w-full'>
      <Image source={icons.search}
      className='size-5'
      resizeMode='contain'
      tintColor='#ab8bff'/>
      <TextInput onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-black'/>
                {/* Clear Button */}
                {value && value.length > 0 && (
                <TouchableOpacity onPress={onClear} className='ml-2'>
                    <Image 
                        source={icons.cross}  // Ensure you have a close icon
                        className='size-5' 
                        resizeMode='contain' 
                        tintColor='#ff6b6b' 
                    />
                </TouchableOpacity>
            )}
    </View>
  )
}

export default SearchBar