import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Text as Title} from "@rneui/themed";
import { colors } from '../style/base';
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';

export const NuevaCuentaModal = () => {
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <View style={styles.header}>
                <Title h4={true} h4Style={{fontSize:16}}>Registrar una nueva cuenta</Title>
                <Title  
                    h4={true} 
                    h4Style={
                        {
                            fontSize:16,
                            color:colors.red, 
                            marginLeft:18,
                        }
                    }
                >
                    Cancelar
                </Title>
            </View>
            <InputWhite 
                title='Nombre' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputWhite 
                title='Apellido' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputWhite 
                title='Numero de cedula' 
                inputWidth='100%' 
                radius={5}
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputWhite 
                title='Telefono de contacto' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputWhite 
                title='Correo' 
                inputWidth='100%'
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputAccordion 
                title='Nombre del banco' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputAccordion 
                title='Numero de cuenta' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <InputAccordion 
                title='Tipo de cuenta' 
                inputWidth='100%' 
                radius={5} 
                margin={12} 
                inputHeight={50} 
                border={1}
            />
            <ButtonComponent 
                background={colors.gold} 
                title='Guardar cuenta bancaria' 
                textColor={colors.white} 
                margin={12}
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
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical:10,
    },
    children:{
        width: '100%',
        height: '100%',
        //borderRadius: 15,
        backgroundColor:'white',
        paddingHorizontal:5,

    },
    header:{
        width: "100%",
        height: "auto",
        //backgroundColor:'black',
        paddingTop:10,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
})