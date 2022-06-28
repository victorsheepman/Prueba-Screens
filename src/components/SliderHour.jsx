import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text as Title } from '@rneui/themed'
import { colors } from '../style/base'
import { ButtonComponent } from '../atoms/buttons/ButtonComponent'

export const SliderHour = () => {
  return (
    <View style={styles.sliderContainer}>
    <Icon type='' name='chevron-left' color={colors.gold} />
    <View style={styles.sliderContent}>
        <Title h4={true} h4Style={{
            fontSize: 20,
            color: colors.black
        }}>Horarios Disponibles</Title>
        <Title  style={{
            fontSize:18,
            color:colors.grey
        }}>9:00pm  10:00pm 11:00am</Title>
        
    </View>
    <Icon  
        name='chevron-right' 
        onPress={() => setProduct(
            {
                value: 200,
                name:'Lija 150'
            }
            )
        }
        color={colors.gold}
    />
   
</View>
  )
}


const styles = StyleSheet.create({
    sliderContainer:{
        width: '80%',
        height: 100,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    sliderContent:{
        width: '80%',
        height: 55,
        paddingHorizontal:12,
        paddingVertical:10,    
        alignItems:'center'                         
        //backgroundColor:'green'
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    },
})