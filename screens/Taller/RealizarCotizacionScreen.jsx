import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BlackTitle } from '../../components/BlackTitle'
import { HeaderComponent } from '../../components/Header'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { colors } from '../../style/base'
import { Card, Icon, Text as Title } from '@rneui/themed'
import { InputWhite } from '../../atoms/InputWhite'
import { Pressable } from 'react-native'
import { CheckBoxComponent } from '../../components/CheckBox'
import { Accordion } from '../../components/Accordion'
import { RealizarSolicitudModal } from '../../components/RealizarSolicitudModal'
import { useNavigation } from '@react-navigation/core'
import { Slider } from '../../components/Slider'



export const RealizarCotizacionScreen = () => {
    
     const navigator= useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' type='antdesign' iconRight='pluscircleo' />
        <BlackTitle title='Realizar cotizacion' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                            {key: 'Marca: Honda'},
                            {key: 'Modelo: Civic'},
                            {key: 'Año: 2016'},
                            {key: 'Color: Negro'},
                            {key: 'Tipo de vehiculo: Sedan'},
                            {key: 'Combustible: Gasolina'},
                            {key: 'Transmicion: Automatica'},
                            {key: '# Asintos: 5'},
                            {key: 'Dueño: victor Marquez'},    
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
                <Card.Divider />
                <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='right'
                        color={colors.gold}
                    /> 
                </View>
           
            </View>
        </View>
        <BlackTitle title='Servicios' />
        <View style={styles.container}>
            <View style={styles.form}>
                <InputWhite 
                    inputWidth='80%' 
                    inputHeight={50} 
                    radius={8} 
                    title='Buscar categoria...' 
                />
                <Pressable style={styles.search}>
                    <Icon type='font-awesome' name='search'color={colors.white} />
                </Pressable>
            </View>
            <View style={styles.instalacionContainer}>
                <Title 
                    h3={true} 
                    h3Style={
                        {fontSize:18, 
                        color:colors.grey
                        }
                    }>
                        Instalacion Farol Delantero
                </Title>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:20, 
                            color:colors.black
                        }
                    }>
                        RD$ 700
                </Title>
                <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='right'
                        color={colors.gold}
                    /> 
                </View>
            </View>
            <Accordion>
                <View style={styles.bodyContainer}>
                    <Title
                        h4={true}
                        h4Style={{
                            fontSize:17,
                            color:colors.black,
                        }}
                    >
                        Tipo de golpe
                    </Title>
                    <CheckBoxComponent title='Golpe Leve' span='(RD$ 500)'/>
                    <CheckBoxComponent title='Golpe Medio' span='(RD$ 1000)' />
                    <CheckBoxComponent title='Golpe Grave' span='(RD$ 1500)'/>
                    <View style={styles.input}>
                        <ButtonComponent 
                            widthButton="102%"
                            background={colors.gold}
                            title='Agregar servicio '
                            textColor={colors.white}
                        />  
                    </View>
                </View>
            </Accordion>
            <Accordion title='Pintura Copleta'>
                <View style={styles.bodyContainer}>
                        <Title
                            h4={true}
                            h4Style={{
                                fontSize:17,
                                color:colors.black,
                            }}
                        >
                            Tipo de golpe
                        </Title>
                        <CheckBoxComponent title='Golpe Leve' span='(RD$ 500)'/>
                        <CheckBoxComponent title='Golpe Medio' span='(RD$ 1000)' />
                        <CheckBoxComponent title='Golpe Grave' span='(RD$ 1500)'/>
                        <View style={styles.input}>
                            <ButtonComponent 
                                widthButton="102%"
                                background={colors.gold}
                                title='Agregar servicio '
                                textColor={colors.white}
                            />  
                        </View>
                    </View>
            </Accordion>
            <Accordion title='Arreglo del radiador'>
                <View style={styles.bodyContainer}>
                        <Title
                            h4={true}
                            h4Style={{
                                fontSize:17,
                                color:colors.black,
                            }}
                        >
                            Tipo de golpe
                        </Title>
                        <CheckBoxComponent title='Golpe Leve' span='(RD$ 500)'/>
                        <CheckBoxComponent title='Golpe Medio' span='(RD$ 1000)' />
                        <CheckBoxComponent title='Golpe Grave' span='(RD$ 1500)'/>
                        <View style={styles.input}>
                            <ButtonComponent 
                                widthButton="102%"
                                background={colors.gold}
                                title='Agregar servicio '
                                textColor={colors.white}
                            />  
                        </View>
                    </View>
            </Accordion>
            <View style={{
                width: '100%',
                height:'auto'
            }}>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:21, 
                            marginTop:12
                        }
                }>
                    Detalles de cotizacion
                </Title>
                
                <Text style={styles.listItem}>SubTotal: RD$ 1,378.00</Text>
                <Text style={styles.listItem}>Itbis: RD$ 378</Text>
            </View>
            <View style={{
                width: '100%',
                height:'auto'
            }}>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:21, 
                            marginTop:12
                        }
                }>
                    Servicios agregados
                </Title>
                <Slider />
            </View>
            <View style={styles.input}>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:17, 
                            marginTop:12
                        }
                    }>RD$1,680.00</Title>
                <ButtonComponent 
                    widthButton={"58%"} 
                    title="Enviar cotizacion" 
                    background={colors.black} 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('CotizacionTalleres')
                    }
                />
        </View>
        </View>
        
        </ScrollView>
        {/*
            first && <RealizarSolicitudModal setShow={setFirst}  />
                    */  
        }
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
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
        position: 'relative',
        marginTop:12,
    },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:9
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    },
    form:{
        width: "100%",
        height:"auto",
        marginTop:15,
        flexDirection:"row",
        justifyContent:"space-between",
       
    },
    search:{
        width: 50,
        height: 50,
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#bea741'
    },
    instalacionContainer:{
        width: '100%',
        height: 100,
        marginTop:24,
        paddingVertical:21,
        paddingHorizontal:11
    },
    bodyContainer:{
        width: "100%",
        height: "auto",
        paddingHorizontal:5,
        paddingVertical :3,
        marginTop:0,
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
    listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:5,
        marginLeft:12
    },
    duda:{
        width:'100%',
        height: 250,
        marginTop:12,
        backgroundColor:'yellow'
    }
})