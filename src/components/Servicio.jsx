import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Text as Title, Icon } from '@rneui/themed';
import { colors } from '../style/base';
import { useNavigation } from '@react-navigation/core';
export const Servicio = ({name='Servicios de mofles',children}) => {
    const navigator = useNavigation()
  return (
      <View style={styles.serviceContainer}>
        {children}
        <Title 
            h4={true} 
            h4Style={
                {
                    fontSize:18,
                }
            }>{name}</Title>
            <Icon  
                type='font-awesome' 
                name='chevron-right'   
                color={colors.gold} 
                onPress={
                    ()=>navigator.navigate('Busqueda' )
                } 
            />
      </View>
  )
}


const styles = StyleSheet.create({
    serviceContainer:{
        width: "100%",
        height: 120,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1
    },
    
  });
  