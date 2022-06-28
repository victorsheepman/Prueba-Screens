import { StyleSheet, Text, View } from 'react-native'
import { Text as Title } from "@rneui/themed";
import React from 'react'
import { colors, padding } from '../../style/base';


const TransferenciaListaModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Title h4={true}>Transferencia Lista</Title>
        <Title h4={true} h4Style={{
          fontSize:16,
          color: colors.grey,
        }}>
          Su dinero estara disponible en 8 horas
        </Title>
        <Title h4={true} h4Style={{
          fontSize:16,
          color: colors.gold,
          marginTop:padding.md
        }}>
            ok  
        </Title>
      </View>
    </View>
  )
}

export default TransferenciaListaModal

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
    children:{
        width: '100%',
        height: '40%',
        //borderRadius: 15,
        backgroundColor:'white',
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center'

    },
})