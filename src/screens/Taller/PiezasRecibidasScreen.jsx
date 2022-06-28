import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { InputAccordion } from '../../atoms/InputAccordion'
import { colors } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { NotificacionModal } from '../../components/NotificacionModal'
import { useNavigation } from '@react-navigation/core';

export const PiezasRecibidasScreen = () => {
    const [show, setShow] = useState(false)
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Piezas Recibidas' />
        <View style={styles.container}>
            <View style={styles.input}>
                <InputWhite inputWidth='48%' title='Desde' radius={10} />
                <InputWhite inputWidth='48%' title='Hasta' radius={10}/>
            </View>
            <InputAccordion title='Filtrar por repuestos'/>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../../assets/pieza.png')}
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                        {key: 'Numero de referencia: #00006'},
                        {key: 'Pieza: motor de arranque'},
                        {key: 'Marca: Honda'},
                        {key: 'Modelo: Civic'},
                        {key: 'Tipo de motor: 17'},
                        {key: 'Año: 2006'},
                        {key: 'Estado: nuevo'},
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.gold} 
                    title="Confirmar entrega" 
                    textColor={colors.white} 
                    margin={12} 
                    handle={
                        ()=>navigator.navigate('ConfirmarEntrega')
                    }
                />
            </View>
        </View>
        {
            show && <NotificacionModal setShow={setShow} />
        }
      </>
    
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:12
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:12,
    },
    list:{
        marginLeft:12,
        //marginTop:2,
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
})