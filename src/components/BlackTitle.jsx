import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const BlackTitle = ({title, margin=0}) => (
  <View style={
    {
      width:"100%",
      height: "auto",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black",
      //marginLeft:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      marginTop:margin
    }
  }>
    <Text style={styles.text}>{title}</Text>
  </View>
  
)


const styles = StyleSheet.create({
  header:{
    width:"100%",
    height: "auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
    //marginLeft:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  text:{
    color: "white",
    fontSize:20,
    fontWeight:"500",
  }
});
