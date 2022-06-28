import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Text as Title, Icon, Input,CheckBox  } from '@rneui/themed';   
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { colors } from '../style/base';
import { AddPicture } from './AddPicture';
import { useNavigation } from '@react-navigation/native';

export const AgregarEmpleadoModal = ({setModal}) => {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Agregar Empleado</Title>
                <Icon type='antdesign' name='closecircleo' onPress={()=>setModal(false)} />
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
                title='Cedula' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Correo electronico' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Telefono' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputAccordion
                title='Especialidades' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='Selecionar'
            />
            <View style={
                {
                    width: '100%',
                    height: 'auto',
                    paddingHorizontal: 12,
                    paddingVertical:12
                }
            }>
                <Title h4={true} h4Style={
                    {
                        fontSize:21,
                        marginLeft:25, 
                        marginBottom:12
                    }
                }>Pago
                </Title>
                <View style={styles.input}>
                    <CheckBox
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check}
                        onPress={() => setCheck(!check)}
                    />
                    <InputWhite 
                        title='Comision a ganar' 
                        inputWidth='80%' 
                        radius={5} 
                        inputHeight={50} 
                        //margin={12} 
                        border={1} 
                    />
                </View>
                <View style={styles.input}>
                    <CheckBox
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                    />
                    <InputWhite 
                        title='Sueldo Fijo' 
                        inputWidth='80%' 
                        radius={5} 
                        inputHeight={50} 
                        //margin={12} 
                        border={1} 
                    />
                </View>
            </View>
            <AddPicture 
                title='Cedula' 
                check={false} 
                titleSize={21} 
                buttonTitle='Adjuntar Archivo' 
                marginButton={20}
            />
            <AddPicture 
                title='Fotos de perfil' 
                check={false} 
                titleSize={21} 
                buttonTitle='Adjuntar Fotos de perfil' 
                marginButton={20}
            />
            <Input
                placeholder="Direccion Residencial"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.black} 
                title="Guardar cuenta bancaria" 
                textColor={colors.white} 
                margin={16} 
                handle={()=> navigator.navigate('reparacionRealizar')}
            />
            </ScrollView>
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
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:'center',
    },
    comment:{
        //width: 100,
        height: 250,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    },
})