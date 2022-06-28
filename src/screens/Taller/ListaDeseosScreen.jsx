import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { colors } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { Card, CheckBox, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
export const ListaDeseosScreen = () => {
    const navigator = useNavigation();
  return (
    <>
    <HeaderComponent iconLeft='chevron-left' />
    <BlackTitle title='Lista de deseos' />
    <View style={styles.container}>
    <View style={styles.card}>
            <Image
                style={styles.item}
                source={
                    require('../../assets/motor.png')
                }
            />
            <View style={styles.list}>
                <FlatList
                    data={[
                        {key: 'Cantidad ordenada: 1'},
                        {key: 'Marca: Honda'},
                        {key: 'Modelo: Civic'},
                        {key: 'Año: 2016'},
                        {key: 'Tipo de motor: no especificado'},
                        {key: 'Descripcion: Ver mas'},
                        {key: 'Estado del articulo: Nuevo'},    
                        {key: 'Fecha de entrega: 30/01/2001'}, 
                        {key: 'Costo de importacion: RS$ 200.000'},
                        {key: 'Costo unidad: RD$ 60.000'},  
                        {key: 'Total: RD$ 62,000'}, 
                        {key: 'Notas del comerciante: Ver notas'}, 
                    ]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                />
            </View>
            <ButtonComponent 
                widthButton={"100%"} 
                title="Ordenar" 
                background={colors.gold} 
                textColor={colors.white} 
                margin={12}
                handle={()=>navigator.navigate('CotizacionId04Screen')}
            />
            <View style={styles.iconContainer}>
                <Icon 
                    type='antdesign' 
                    name='close'
                    color={colors.red}
                /> 
            </View>
       
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
    item:{
        width: 60,
        height: 60,
      //  backgroundColor:"red",
        marginRight:9
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
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    }
})