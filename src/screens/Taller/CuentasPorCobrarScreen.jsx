import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed';
import { colors, fonts } from '../../style/base';
import { Cobro } from '../../components/Cobro';
import { useNavigation } from '@react-navigation/native';


const CuentasPorCobrarScreen = () => {
    const navigator = useNavigation();
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Cuentas por cobrar' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.titleWrapper}> 
                <Image
                    style={styles.item}
                    source={require('../../assets/reserva.png')}
                />
                <Title h4={true} h4Style={{fontSize:19, marginLeft:15}}>Seguros reserva</Title>
                <Text style={styles.span}>07/30/21</Text>     
            </View>
            <View style={styles.factura}>
                <Title h3={true} h3Style={{fontSize:fonts.md}}>Numero de factura:</Title>
                <Title h3={true} h3Style={{fontSize:fonts.md}}>#00000675</Title>
            </View>
            <Card.Divider style={{width:"90%",margin:20}} color={colors.grey} width={1}/>
            <Cobro type='COBRADO' number='1' handle={()=>navigator.navigate('CuentasCobrarTwo')}/>
            <Cobro number='2'/>
            <Cobro number='3' />
            <View style={styles.containerTitle}>
                <Title h4={true} h4Style={{fontSize:16}}>Monto Pendiente: </Title>
                <Text style={styles.date}>RSD$ 40000</Text>
            </View>
        </View>
        </ScrollView>
    </>
  )
}

export default CuentasPorCobrarScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:20,
        position:'relative'
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
        marginTop:12
    },
    item:{
        width: 30,
        height: 30,
        borderRadius:15,
        backgroundColor:"red"
    },
    span:{
        fontSize:14,
        color:"gray",
        marginLeft:'30%'
    },
    factura:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:10
    },
    containerTitle:{
        width: "auto",
        height: "auto",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:7,
        marginTop:21,
        shadowColor: "black",
        position: 'absolute',
        bottom: 1,
        left: 20,
    },
    date:{
        fontSize:14,
        marginLeft:"40%"
    }
})