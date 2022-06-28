import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../style/base'

export const ContanerShadow = ({children, title="hola"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:"white",
      width: "97%",
      height: "auto",
      borderColor:"black",
      padding: 6,
    },
    title:{
      fontSize:20,
      color: "#c2ac4d",
      fontWeight:"500",
    }
})