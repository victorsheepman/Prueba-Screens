import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Text as Title } from '@rneui/themed';
import { colors } from '../style/base';
export const Credito = ({type="PAGADO", number}) =>(
    <View style={styles.creditoContainer}>
        <View style={styles.creditoTitle} >
            <Title 
                h4={true} 
                h4Style={
                    {
                        fontSize:16, 
                        color:type == "PAGADO" ? 
                                colors.green : 
                                colors.red 
                        }
                    } 
                >
                    {type}
                </Title>
                <Text>07/05/2021</Text>
            </View>
            <View style={styles.creditoTitle} >
                <Title h4={true} h4Style={{fontSize:14,color:colors.grey }} >Pago {number}</Title>
                <Title  h4={true} h4Style={{fontSize:16}}>RSD$ 858000</Title>
            </View>  
        </View>
)


const styles = StyleSheet.create({
    creditoContainer:{
        width: "100%",
        height: 90,
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10, 
        justifyContent:"space-between" ,
        marginTop: 20
    },
    creditoTitle:{
        width: "auto",
        height: "auto",
        flexDirection:"row",
        justifyContent:"space-between",
    },
  });
  
  