import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title } from '@rneui/themed'
export const Cronometro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCronometro}>
        <Title h3={true} h3Style={styles.texto}>12:34:00</Title>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCronometro:{
        width: '100%',
        height: 190,
        backgroundColor:'black',
        borderWidth:10,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    texto:{
        fontSize:80,
        color:'red'
    }
})