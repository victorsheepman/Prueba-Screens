import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { Card } from '@rneui/themed'
import { colors, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { CheckBoxComponent } from '../../components/CheckBox'
import { useNavigation } from '@react-navigation/native'

export const PasoOneScreen = () => {
    const navigator=useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='align-justify' />
        <BlackTitle title='Paso 1' />
        <ScrollView>
        <View style={styles.container}>
            <InputWhite 
                title='Fecha de recepcion' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Fecha de inicio' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Fecha de entrega' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <Card.Divider style={{marginTop:padding.md}} />
            <InputWhite 
                title='Cliente' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Telefono' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Direccion' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Marca' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Modelo' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Año' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Color' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Chasis' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Placa No' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Poliza' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Ajustador' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Reclamacion' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputWhite 
                title='Cia. Aseguradora' 
                inputWidth='100%' 
                radius={8} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
             <ButtonComponent
                title='Guardar'
                widthButton='100%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
                handle={()=>navigator.navigate('PasoTwo')}
            />
            
        </View>
        </ScrollView>
      </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
      }
})