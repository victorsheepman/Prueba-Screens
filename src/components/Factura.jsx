import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title } from '@rneui/themed'
import { fonts, padding } from '../style/base'
export const Factura = (
    {
        id = '00000001000', 
        date = '12:47PM',
        servicio = 'Pintura de Puerta', 
        placa = '00024', 
        monto = 250 
    }
    ) => {
  return (

        <View style={styles.facturaContainer}>
            <View style={styles.facturaHeader}>
                <Text style={styles.hora}>{date}</Text>
                <Title h4={true} h4Style={{fontSize:fonts.sm, marginLeft: padding.sm}}>RD$ {monto}</Title>
                <Title style={styles.id}>ID: {id}</Title>
            </View>
            <View style={styles.servicio}>
                <Title 
                    h4={true} 
                    h4Style={
                        {
                            fontSize:16, 
                            marginRight: padding.sm
                        }
                    }>
                        Servicio:
                </Title>
                <Text style={styles.hora}>{servicio}</Text>    
            </View>
            <View style={styles.servicio}>
                <Title 
                    h4={true} 
                    h4Style={
                        {
                            fontSize:16, 
                            marginRight: padding.sm
                        }
                    }>
                       Placa de Vehiculo
                </Title>
                <Text style={styles.hora}>{placa}</Text>    
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    facturaContainer:{
        width:'100%',
        height:'auto',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5,
        borderWidth:1,
        marginTop:10
    },
    facturaHeader:{
        width:'100%',
        height: 'auto',
        marginBottom:24,
        flexDirection:'row',
        alignItems:'center',
        
    },
    hora:{
        color:'grey',
                
        fontSize:14
    },
    id:{
        fontSize:12,
        position: 'absolute',
        right: 10,
    },
    servicio:{
        width:'50%',
        height: 'auto',
        flexDirection:'row',
        alignItems:'baseline',
    }
})