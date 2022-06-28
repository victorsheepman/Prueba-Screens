import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image, Text as Title } from '@rneui/themed'
import { colors, fonts, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { HeaderComponent } from '../../components/Header'
import { useNavigation } from '@react-navigation/native'


export const EmpleadoScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent 
            iconLeft='align-justify' 
            type='antdesign' 
        />
        <View style={styles.container}>
            <Image style={styles.user} source={require('../../assets/pedro.png')} />
            <Title h3={true} style={{marginTop:padding.md}}>Pedro Hernandez</Title>
            <Text style={styles.span}>Pintor de vehiculos</Text>
            <View style={styles.dates}>
                <Title 
                    h4={true} 
                    h4Style={{fontSize:fonts.md, marginTop:padding.md}}
                >
                    Cedula:
                </Title>
                <Title 
                    h4={true} 
                    h4Style={{fontSize:fonts.md,  marginTop:padding.md}}>27.976.122</Title>
            </View>
            <View style={styles.dates}>
                <Title h4={true} h4Style={{fontSize:fonts.md}}>Telefono:</Title>
                <Title h4={true} h4Style={{fontSize:fonts.md}}>27.976.122</Title>
            </View>
            <ButtonComponent
                widthButton={"48%"} 
                title="Cuentas Bancarias" 
                background={colors.gold} 
                textColor={colors.white} 
                margin={21}
                handle={()=>navigator.navigate('CuentasBancarias')}
            />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user:{
        width: 250,
        height: 250,
        borderRadius:200
    },
    dates:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    span:{
        fontSize:19, 
        color: "grey"
    }
})