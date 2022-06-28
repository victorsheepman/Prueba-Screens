import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Icon } from '@rneui/themed'
import { colors } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { useNavigation } from '@react-navigation/core'

export const ReparacionPendienteScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle  title='Reparacion pendiente' />
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
                <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.gold} 
                    title="Ver reparaciones" 
                    textColor={colors.white} 
                    margin={12} 
                    handle=
                    {
                        () => navigator.navigate('ServicioScreen') 
                    }
                />
            </View>
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
})