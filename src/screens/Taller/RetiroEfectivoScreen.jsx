import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Text as Title } from "@rneui/themed";
import { InputAccordion } from '../../atoms/InputAccordion';
import { InputWhite } from '../../atoms/InputWhite';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { colors } from '../../style/base';
import { useNavigation } from '@react-navigation/native';
export const RetiroEfectivoScreen = () => {
    const navigator = useNavigation();
    return (
        <>
            <HeaderComponent iconLeft='align-justify' type='antdesign' />
            <BlackTitle title='Retro de efectivo' />
            <View style={styles.container}>
            
            <View style={styles.label}>
                <Title h4={true}>Selecciones tu Banco</Title>
                <InputAccordion title='Banco Popular' type='' />
            </View>
            
            <View style={styles.label}>
                <Title h4={true}>Seleccione tu Cuenta</Title>
                <InputAccordion title='12334455667' />
            </View>
            <View style={styles.label}>
                <Title h4={true}>Monto a retirar</Title>
                <InputWhite title='RSD$ 400' inputWidth='100%' border={1} radius={3} margin={6} inputHeight={50} />
            </View>
            <View style={{
                position: "absolute",
                width: "100%",
                height: "auto",
                flexDirection:"row",
                justifyContent:"space-around",
                bottom: 5,
        
            }}>
                <ButtonComponent 
                    widthButton="40%" 
                    background={colors.black} 
                    title='Cancelar' 
                    textColor={colors.white} 
                />
                <ButtonComponent 
                    widthButton="40%" 
                    background={colors.gold} 
                    title='registrar  ahora' 
                    textColor={colors.white} 
                    handle={()=>navigator.navigate('TranferenciaModal')}
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
        paddingHorizontal:5
  
      },
      label: {
          width: "100%",
          height: "auto",
          marginTop:15
      }
})