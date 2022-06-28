import { StyleSheet, Text, View,Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Text as Title, Icon, Input, Switch } from '@rneui/themed';
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/core';
export const SolicitudModal = ({setShow}) => {
    const [checked, setChecked] = useState(false);
    const navigator = useNavigation();
  return (
    <View style={styles.container}>

       <View style={styles.children}>
           <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Solicitud #000004</Title>
                <Icon type='antdesign' name='closecircleo' onPress={
                    ()=>setShow(false)
                }/>
            </View>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../assets/pieza.png')}
                />
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
            <InputWhite 
                title='Costo de instalacion' 
                inputWidth='100%' 
                inputHeight={50} 
                margin={12} 
                border={1} 
                radius={6} 
            />
            <InputWhite 
                title='Tiempo de instalacion' 
                inputWidth='100%' 
                inputHeight={50} 
                margin={12} 
                border={1} 
                radius={6} 
            />
            <InputAccordion title='¿Tiene garantia?' type='si' />
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Title h4={true} h4Style={{fontSize:16}}>¿Requerimiento inicial?</Title>
                    <Switch
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                        color={colors.green}
                    />
                </View>
                <InputWhite 
                    title='Monto Inicial:' 
                    inputWidth='100%' 
                    inputHeight={50} 
                    margin={12} 
                    border={1} 
                    radius={6} 
                />
            </View>
            <Input
                placeholder="Enviar una nota"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.black} 
                title="Enviar Solicitud" 
                textColor={colors.white} 
                margin={12} 
                //handle={()=>navigator.navigate('SolicitudTalleres')}
            />
            </ScrollView>
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
          paddingHorizontal: 6,
          paddingVertical:20
    },
    children:{
        width: '100%',
        height: "auto",
        backgroundColor:'white',
        paddingHorizontal: 12,
        paddingVertical:6
    },
    childrenHeader:{
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
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
        marginLeft:12,
        //marginTop:2,
      },
      listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:5,
      },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red"
    }, 
    wrapper:{
        width: "100%",
        height: 120,
        paddingHorizontal:10,
        paddingVertical:7,
       // borderWidth:1, 
        marginTop:12
    }, 
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-between"
    },
    comment:{
        //width: 100,
        height: 250,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    },
})