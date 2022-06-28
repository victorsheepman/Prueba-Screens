import { StyleSheet, Text, View, Image, FlatList, Button, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { colors, fonts } from '../../style/base';
import { CheckBoxComponent } from '../../components/CheckBox';
import { useNavigation } from '@react-navigation/native';

export const CotizacionId04Screen = () => {
    const navigator = useNavigation(); 
    return (
      <>
    <HeaderComponent iconLeft='chevron-left' />
    <BlackTitle title='Cotizacion #000004' />
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.titleWrapper}> 
            <Image
                source={require('../../assets/Talle.png')}
                style={styles.item}
            />
            <Title h4={true} h4Style={{fontSize:19, marginLeft:15}}>TRM Repuestos</Title>
            <Text style={styles.span}>Ver perfil</Text>     
        </View>
        <Card.Divider style={{marginTop:19}} />

        <View style={styles.containerBox}>
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
                <Text>Cantidad: 5</Text>
                <Text>Costo unidad: RD$ 400</Text>
                <Text style={{
                    marginTop:21,
                    color: colors.gold, fontSize:16
                }}>
                    Precio dado por el provedor
                </Text>
            </View>
        </View>
       <View style={{
            width: '100%',
            height: 'auto',
            flexDirection:'row',
            justifyContent:'space-between', 
            alignItems:'flex-end',
       }}> 
        <ButtonComponent
            title='Rechazar'
                    widthButton='30%'
                    background={colors.red}
                    textColor={colors.white}
                    margin={12}
        />
        <ButtonComponent
            title='Aceptar articulo'
                    widthButton='65%'
                    background={colors.gold}
                    textColor={colors.white}
                    margin={12}
        />

       </View>
    </View>
        <Card.Divider style={{marginTop:19}} />
        <Title h3={true} h3Style={{fontSize:16}}>Metodo de pago</Title>
        <View style={styles.input}>
                
                <Pressable style={{
                    width: '48%',
                    height:45,
                    borderColor:colors.gold,
                    borderWidth:2,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5, 
                    marginTop:12
                }}>
                    <Text style={{
                        fontSize:20,
                        color: colors.gold
                    }}>Pago directo</Text>
                </Pressable>
                <ButtonComponent 
                    widthButton={"48%"} 
                    title="Aceptar" 
                    background={colors.gold} 
                    textColor={colors.white} 
                    margin={12}
                    
                />
        </View> 
        <CheckBoxComponent title="Pago quincenal" span='(4 cuotas de RD$ 420)' />
        <CheckBoxComponent title='Pago mensual' span='(2 cuotas de RD$ 820)' />
        <Title h3={true} h3Style={{fontSize:17, marginTop:12}}>Detalles de facturacion</Title>
        
        <Text style={styles.listItem}>SubTotal: RD$ 1,378.00</Text>
        <Text style={styles.listItem}>Envio: RD$ 300.00</Text>
        <Text style={styles.listItem}>Itbis: RD$ 378</Text>
        <Card.Divider style={{marginTop:19}} />
        <View style={styles.input}>
            <Title h3={true} h3Style={{fontSize:17, marginTop:12}}>RD$1,680.00</Title>
            <ButtonComponent 
                widthButton={"58%"} 
                title="Comprar articulo" 
                background={colors.black} 
                textColor={colors.white} 
                margin={12}
                handle={()=> navigator.navigate('ordenCompra')}
            />
        </View>
        </ScrollView>
    </View>
      </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:12,
        paddingVertical:6
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    nameTaller:{
        width: "100%",
        height: 'auto'
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
        marginLeft:'50%'
    },
    card:{
        width:"100%",
        height: "auto",
        //backgroundColor:"blue",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:15,
        paddingLeft:12,
    
    },
    itemtwo:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:15
    },
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:12,
        paddingHorizontal:12,
    },
    checkbox:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems:'center',
        marginTop:2,
        paddingHorizontal:12,
    },
    listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:5,
    },
    containerBox:{
        width: '100%',
        height: 'auto',
        marginTop:20
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