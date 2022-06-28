import { View, StyleSheet } from 'react-native'
import { Text } from "@rneui/themed";
import React from 'react'
import { colors, fonts } from '../style/base';

export const AvisoTransferencia = () => {
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <Text h3={true} h3Style={{fontSize:fonts.md}}>
                Transferencia Lista
            </Text>
            <Text style={{fontSize:fonts.md, color:colors.grey, width:"50%", textAlign:"center"}}>
                Su dinero estara disponible en 8 horas
            </Text>
            <Text style={{fontSize:fonts.md, color:colors.gold}}>
                ok
            </Text>
        </View>
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
        paddingVertical:"60%",
    },
    children:{
        width: '100%',
        height: '100%',
        //borderRadius: 15,
        backgroundColor:'white',
        paddingHorizontal:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',

    },
})