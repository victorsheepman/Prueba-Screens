import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Card } from "@rneui/themed";
export const TransferenciaLista = () => {
  return (
    <View style={styles.container}>
      <Text>TransferenciaLista</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex: 2,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical:10,
    },
})