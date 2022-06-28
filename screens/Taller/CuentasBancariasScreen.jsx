import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, padding } from '../../style/base'
import {  Tile, Text as Title } from '@rneui/themed'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { HeaderComponent } from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { RegistrarNuevasCuentasBancariasModal } from '../../components/RegistrarNuevasCuentasBancariasModal'

export const CuentasBancariasScreen = () => {
    const navigator = useNavigation();
    const [modal, setModal] = useState(false)
  return (
      <>
        <HeaderComponent 
            iconLeft='align-justify' 
            type='antdesign' 
        />
        <View style={styles.container}>
            <Image source={require('../../assets/card.png')} style={{width:350, height:270}} />
            <Title  
                h3={true} 
                h3Style={
                    {
                        color:colors.black, 
                        fontSize:fonts.md,
                        textAlign:"center",
                        marginTop:  padding.md
                    }
                    
                }
            >
                Registra tu primera cuenta y empieza tu experiencia en comidell
            </Title>
            <ButtonComponent 
                widthButton="100%"
                background={colors.gold}
                title='Registrar nueva cuenta'
                textColor={colors.white}
                margin={170}
                handle={()=>navigator.navigate('RegistrationScreen')}
            />
        </View>
        {
            modal && <RegistrarNuevasCuentasBancariasModal />
        }
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:25,
    },
})