import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../style/base'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'

export const LinkBox = ({title='hola', ruta}) => {
    const navigator = useNavigation();
  return (
    <View style={{
        width: '100%',
        height:'auto',
       
        alignItems:'center',
        flexDirection: 'row'
    }}>
       
      <Image 
        style={{
            width: 30,
            height: 30,
            backgroundColor:colors.black,
            marginRight:7,
            marginTop:7
            
        }}
      />
      <Text
        onPress={()=>navigator.navigate(ruta)}
      >
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})