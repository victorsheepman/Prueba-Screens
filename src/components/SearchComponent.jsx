import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputWhite } from '../atoms/InputWhite'
import { colors } from '../style/base'
import { Icon } from '@rneui/themed'

export const SearchComponent = ({title}) => {
  return (
    <View style={styles.form}>
        <InputWhite 
            inputWidth='80%' 
            inputHeight={50} 
            radius={8} 
            title={title}
        />
        <Pressable style={styles.search}>
            <Icon type='font-awesome' name='search'color={colors.white} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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
    }
})