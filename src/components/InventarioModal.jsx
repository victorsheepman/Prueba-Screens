import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Text as Title, Icon, Input, Switch,  } from '@rneui/themed';
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
export const InventarioModal = () => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Inventario</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <InputWhite
                title='Nombre del articulo' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputAccordion title='Categoria' />
            <InputAccordion title='Estado' />
            <View style={styles.box}>
                <Text>Dispible?</Text>
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)}
                    color={colors.green}
                />
            </View>
            <InputWhite
                title='Costo de compra' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite
                title='Precio de venta' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <View style={styles.box}>
                <Text>Itbis?</Text>
                <Switch
                    value={checked2}
                    onValueChange={(value) => setChecked2(value)}
                    color={colors.green}
                />
            </View>
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
    box: {
        width: '100%',
        height: 'auto',
        paddingVertical:12,
        paddingHorizontal:21,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    }
})