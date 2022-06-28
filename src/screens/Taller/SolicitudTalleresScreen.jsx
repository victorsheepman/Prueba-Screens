import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { colors } from '../../style/base';
import { useNavigation } from '@react-navigation/core';

export const SolicitudTalleresScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Solicitud de Talleres' />
        <View style={styles.container}>
            <View style={styles.card}>
               
                <View style={styles.titleWrapper}> 
                    <Image
                        style={styles.item}
                        source={require('../../assets/Talle.png')}
                    />
                    <Title h4={true} h4Style={{fontSize:16, marginLeft:15}}>Taller chelo</Title>
                    
                </View>
                
                <View style={styles.list}>
                    <FlatList
                        data={[
                        {key: 'Tipo de servicio: instalacion de pieza'},
                        {key: 'numero de cotizacion: 00000123'},
                        {key: 'Marca: Honda'},
                        {key: 'Modelo: Civic'},
                        {key: 'Tipo de motor: 17'},
                        {key: 'Año: 2006'},
                        {key: 'Combustible: ver descripcion'},
                        {key: 'Transmicion: ver pieza'},    
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
            </View>
            <Card.Divider style={{marginTop:12}} />
            <View style={styles.input}>
                
                <ButtonComponent
                    widthButton={"40%"} 
                    title="Rechazar" 
                    background={colors.red} 
                    textColor={colors.white} 
                    margin={12}
                />
                <ButtonComponent 
                    widthButton={"58%"} 
                    title="Aceptar" 
                    background={colors.gold} 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('RealizarReservacion')}
                />
            </View>
            <Card.Divider style={{marginTop:12}} />
        </View>
      </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    item:{
        width: 30,
        height: 30,
        borderRadius:15,
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
    list:{
        marginLeft:76,
        //marginTop:2,
      },
      listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:5,
      },
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
    },
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:12,
        paddingHorizontal:12
      },
})