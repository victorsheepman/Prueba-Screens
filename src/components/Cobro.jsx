import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Text as Title } from '@rneui/themed';
import { colors } from '../style/base';
export const Cobro = ({type="PAGADO", number, date=false, mes='Enero', nro=3, handle=''}) =>{
    if(date==false){
        return(
            <View style={styles.creditoContainer}>
        <View style={styles.creditoTitle} >
            <Title 
                h4={true} 
                h4Style={
                    {
                        fontSize:16, 
                        color:type == "PAGADO" ? 
                                colors.red : 
                                colors.green
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
    }else{
        return(
            <View style={styles.creditoContainer}>
        <View style={styles.creditoTitle} >
            <Title 
                h4={true} 
                h4Style={
                    {
                        fontSize:16, 

                    }
                    } 
                >
                  2021
                </Title>
                <Text>{nro} cuentas por cobrar</Text>
            </View>
            <View style={styles.creditoTitle} >
                <Title h4={true} h4Style={{fontSize:14,color:colors.grey }} >{mes}</Title>
                <Title  h4={true} h4Style={{fontSize:16, marginRight:12}}>RSD$ 858000</Title>
            </View> 
            <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='right'
                        color={colors.gold}
                        onPress={handle}
                    
                    /> 
                    
            </View> 
        </View>
        )
    }
}

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
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        bottom: 7,
        right: 2,        
    },
  });
  
  