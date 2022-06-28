import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BlackTitle } from '../../components/BlackTitle'
import { HeaderComponent } from '../../components/Header'
import { Card, Icon } from '@rneui/themed'
import { colors } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { InputWhite } from '../../atoms/InputWhite'
import { Accordion } from '../../components/Accordion'
import { Especialista } from '../../components/Especialista'
import { AsignarEspecialistaModal } from '../../components/AsignarEspecialistaModal'
import { AsignarMaterialGastableModal } from '../../components/AsignarMaterialGastableModal'

export const ServicioScreen = () => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    
  return (
      <>
      
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle  title='Reparacion pendiente' />
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../../assets/carro.png')}
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
        <BlackTitle  title='Servicio' />
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
            <Accordion title='Desbolladura Puerta'>
                <Especialista isCheck={false}/>
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.black} 
                    title="Asignar o cambiar de especialista" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={()=>setShow(true)}
                />
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.gold} 
                    title="Asignar material gastable" 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>setModal(true)} 
                    
                    
                />
            </Accordion>
            <Accordion title='Pintura Completar'>
                <Especialista isCheck={false}/>
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.black} 
                    title="Asignar o cambiar de especialista" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={()=>setShow(true)}
                />
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.gold} 
                    title="Asignar material gastable" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={()=>setModal(true)}
                />
            </Accordion>
            <Accordion title='Arreglo del radiador'>
                <Especialista isCheck={false}/>
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.black} 
                    title="Asignar o cambiar de especialista" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={()=>setShow(true)}
                />
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.gold} 
                    title="Asignar material gastable" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={()=>setModal(true)}
                />
            </Accordion>
        </View>
        </ScrollView>
        {
            show && <AsignarEspecialistaModal setShow={setShow} />
            
        }
        {
            modal && <AsignarMaterialGastableModal setModal={setModal} />
        }
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
})