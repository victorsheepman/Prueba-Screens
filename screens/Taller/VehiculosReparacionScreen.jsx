import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { BlackTitle } from '../../components/BlackTitle'
import { HeaderComponent } from '../../components/Header'
import { InputWhite } from '../../atoms/InputWhite'
import { InputAccordion } from '../../atoms/InputAccordion'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { colors } from '../../style/base'
import { Card, CheckBox, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

export const VehiculosReparacionScreen = () => {
    const [check, setCheck] = useState(false)
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Vehiculos en reparacion' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.input}>
                <InputWhite inputWidth='48%' title='Desde' radius={10} />
                <InputWhite inputWidth='48%' title='Hasta' radius={10}/>
            </View>
            <InputAccordion title='Filtrar por Marca'/>
            <InputAccordion title='Filtrar por Modelo'/>
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
                <ButtonComponent 
                    widthButton={"100%"} 
                    title="Realizar cotizacion" 
                    background={colors.gold} 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('RelizarCotizacion')}
                />
                <ButtonComponent 
                    widthButton={"100%"} 
                    title="Dar salida a este vehiculo" 
                    background={colors.black} 
                    textColor={colors.white} 
                    margin={12}
                />
                <View style={styles.iconContainer}>
                    <Icon 
                        type='antdesign' 
                        name='upcircleo'
                    /> 
                </View>
           
            </View>
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
                <Card.Divider style={{height:2, borderWidth:1}} />
                <CheckBox
                    center
                    title="Financiera Seleccionadas"
                    checked={check}
                    onPress={() => setCheck(!check)}
                />
                <View style={styles.iconContainer}>
                    <Icon 
                        type='antdesign' 
                        name='downcircleo'
                    /> 
                </View>
           
            </View>
        </View>
        </ScrollView>
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
      input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:12,
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
        marginTop:12
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
    }

})