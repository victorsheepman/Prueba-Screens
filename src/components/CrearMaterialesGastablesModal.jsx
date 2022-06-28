import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { InputAccordion } from '../atoms/InputAccordion';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';

export const CrearMaterialesGastablesModal = ({setModal}) => {
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Crear material gastable</Title>
                <Icon type='antdesign' name='closecircleo' onPress={()=>setModal(false)} />
            </View>
            <InputAccordion
                title='Nombre del producto' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='lijas 280'
            />
            <InputAccordion
                title='Unidad de medida' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='Cantidad'
            />
            <InputAccordion
                title='Categoria' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='lijas '
            />
            <InputAccordion
                title='Disponible en stock' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='50'
            />
            <ButtonComponent 
                    widthButton={"100%"} 
                    background={colors.black} 
                    title="Guardar" 
                    textColor={colors.white} 
                    margin={16} 
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
          paddingHorizontal: 12,
    },  
    children:{
        width: '100%',
        height: "auto",
        backgroundColor:'white',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        paddingHorizontal:8,
        paddingVertical:8

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