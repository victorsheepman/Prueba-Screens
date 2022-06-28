import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { colors } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { Card, CheckBox, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
export const DeseosScreen = () => {
    const navigator = useNavigation();
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Deseos' />
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
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
                <ButtonComponent 
                    widthButton={"100%"} 
                    title="Lo tengo" 
                    background={colors.gold} 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('TengoEsteArticuloModal')}

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