import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ContanerShadow } from '../../components/ContanerShadow'
import { Card, Icon, Text as Title } from '@rneui/themed'
import { colors, fonts } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { useNavigation } from '@react-navigation/core';
import { MetodosPagoModal } from '../../components/MetodosPagoModal'
export const CotizacionTalleresScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Cotizacion Talleres' />
    <View style={styles.container}>
       <ContanerShadow title=''>
            <View style={styles.titles}>
                <Title h4={true} h4Style={{fontSize:fonts.md}}>Seguros reserva</Title>
                <Title style={{color:colors.grey, fontSize:fonts.md}}>(hace25 minutos)</Title>
            </View>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../../assets/carro.png')}
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                        {key: 'Tipo de servicio: Reparacion'},
                        {key: 'Perfil del taller: ver perfil'},
                        {key: 'Marca: Honda'},
                        {key: 'Modelo: Civic'},
                        {key: 'Año: 2006'},
                        {key: 'Color: Negro'},
                        {key: '# placa: 00000000'},
                        {key: 'Servicios a necesitar: 3'}, 
                        {key: 'Total: RD$ 500000'},    
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
            </View>
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.gold} 
                title="Ver cotizacion" 
                textColor={colors.white} 
                margin={12} 
                handle={
                    ()=>navigator.navigate('CotizacionId')
                }
            />
        </ContanerShadow>
        <Card.Divider />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:20
    },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red"
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
    titles:{
        width: "100%",
        height: "auto",
        flexDirection:"row",
        justifyContent:"space-between",
       // backgroundColor:"black"
    },
    list:{
        marginLeft:12,
        //marginTop:2,
      },
      listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:5,
      },
})