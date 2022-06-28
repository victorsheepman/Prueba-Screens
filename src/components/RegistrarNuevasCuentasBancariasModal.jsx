import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon } from '@rneui/themed';   
import { colors } from '../style/base';
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export const RegistrarNuevasCuentasBancariasModal = () => {
    const navigator = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <View style={styles.childrenHeader}> 
                <Icon type='antdesign' name='closecircleo' />
                <Title h4={true} h4Style={{fontSize:16}}>Agregar Empleado</Title>
                <Title h4={true} h4Style={{fontSize:12, color:colors.red}}>Cancelar</Title>
            </View>
            <InputWhite 
                title='Nombre' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Apellidos' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Numero de cedula' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Telefono de contacto' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
             <InputWhite 
                title='correo' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputAccordion
                title='Nombre del banco' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='Selecionar'
            />
            <InputAccordion
                title='Numero de Cuenta' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='Selecionar'
            />
            <InputAccordion
                title='Tipo de Cuenta' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='Selecionar'
            />
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.gold} 
                title="Guardar cuenta bancaria" 
                textColor={colors.white} 
                margin={16} 
                handle={()=> navigator.navigate('CuentasFullScreen')}

            />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
          right: 0,
          left: 0,
          backgroundColor:'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
          display:'flex',
          paddingHorizontal: 20,
          paddingVertical:20
    },
    children:{
        width: '100%',
        height: "auto",
        backgroundColor:'white',
        paddingHorizontal: 12,
        paddingVertical:6
    },
    childrenHeader:{
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
})