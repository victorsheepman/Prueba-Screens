import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../style/base'
import { Image } from 'react-native'
import { fonts } from '@rneui/base'

export const BoxPicture = ({title='4.5'}) => {
  return (
    <View style={{
        width: 'auto',
        height:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'baseline',
        backgroundColor:colors.black,
        borderRadius:9
    }}>
        <Text 
        style={{
          color: colors.white,
          fontSize:19
          
        }}>{title}</Text>
        <Image
          source={require('../assets/star.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft:9
          }}
         />
    </View>
  )
}
