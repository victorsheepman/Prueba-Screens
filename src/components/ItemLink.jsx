import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const ItemLink = ({text="hola",children, margin=12, ruta}) => {
  const navigator = useNavigation();
  return (
    <View style={
      {
        width: 236,
        height: 80, 
        backgroundColor:'black',
        paddingLeft:12,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        marginTop:margin,
      }
      
    }>
     {children}
      <Text style={{
        color:'white',
        fontSize:20,
        width:150, marginLeft:12
      }} onPress={()=>navigator.navigate(ruta)}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 256,
        height: 90, 
        backgroundColor:'black',
        paddingLeft:12,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:60,
        borderBottomRightRadius:60

    },
    image:{
        width: 80,
        height: 80,
        borderRadius:80,
        borderTopRightRadius:80,
        backgroundColor:'white'
    },
  
})