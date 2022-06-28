import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { Image } from 'react-native';
import { InputAccordion } from '../atoms/InputAccordion';
import { InputWhite } from '../atoms/InputWhite';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { colors } from '../style/base';
export const DatosSeguroModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>
                    Datos del seguro
                </Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <InputAccordion title='Aseguradora' />
            <InputWhite 
                title='Contacto' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Poliza' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Nombre del asegurado' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Numero de aviso' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Reclamo' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <ButtonComponent
                title='Guardar'
                widthButton='100%'
                background={colors.black}
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
          paddingHorizontal: 6,
          paddingVertical:7
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