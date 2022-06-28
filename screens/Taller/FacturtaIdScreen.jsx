import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed';
import { colors, fonts } from '../../style/base';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export const FacturtaIdScreen = () => {
    const navigator = useNavigation();
  return (
    <>
        <HeaderComponent  iconLeft='chevron-left' iconRight='ellipsis-v' type='font-awesome' handle={()=>navigator.navigate('MasOpcionesModal')}/>
        <BlackTitle title='Categoria de servicio' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.titleWrapper}> 
                <Image
                    style={styles.item}
                    source={require('../../assets/Talle.png')}
                />
                <Title h4={true} h4Style={{fontSize:19, marginLeft:15}}>TRM repuestos</Title>
                <Text style={styles.span}>07/24/2021</Text>     
            </View>
            <View style={styles.factura}>
                <Title h3={true} h3Style={{fontSize:18}}>Vendedor:</Title>
                <Text style={{fontSize:18}}>Pedro Enrique</Text>
            </View>
            <View style={styles.factura}>
                <Title h3={true} h3Style={{fontSize:18}}>Cliente:</Title>
                <Text style={{fontSize:18}}>Jose Lirio</Text>
            </View>
            <Card.Divider style={{marginTop:12}} />
            <View style={styles.top}>
            <Image source={require('../../assets/mannol.png')}
                  style={{
                      width: 95,
                      height: 110,
                  }}
              />
            <View style={styles.box}>
                <Title h3={true} h3Style={{
                    fontSize:fonts.md
                }}>MANNOL Plus aceite de motor</Title>
                <Text>Numero de Articulo: 000025 </Text>
                <Text>Cantidad ordenada: 5</Text>
                <Text>Precio unitario: RD$ 400</Text>
                <Text>Precio Total: RD$ 1000,00</Text>
                
            </View>
        </View>
        <Card.Divider style={{marginTop:12}} />
            <View style={{width:'100%', height:'auto', marginTop:70}}>
                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:18}}>SubTotal:</Title>
                    <Text style={{fontSize:18}}>RD$ 1800,00</Text>
                </View>
                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:18}}>Envio:</Title>
                    <Text style={{fontSize:18}}>RD$ 300,00</Text>
                </View>
                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:18}}>Itbis:</Title>
                    <Text style={{fontSize:18}}>RD$ 260,00</Text>
                </View>
            </View>
            <Card.Divider style={{marginTop:12}} />

                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:21}}>Total:</Title>
                    <Title h3={true} h3Style={{fontSize:21}}>RD$ 260,00</Title>
                </View>
        </View>
        </ScrollView>
    </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
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
        justifyContent:'space-around',
        alignItems:'baseline',
        marginTop:12
    },
    top:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        marginTop:12, 
        justifyContent:'space-around'

    },
    box:{
        width: 'auto',
        height:'auto'
    },
})