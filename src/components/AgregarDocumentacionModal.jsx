import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { AddPicture } from './AddPicture';
import { colors, fonts } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';

export const AgregarDocumentacionModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Agregar Documentacion</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <AddPicture title='Cedula' buttonTitle='Agregar Foto' />
            <AddPicture title='Pasaporte' buttonTitle='Agregar Foto' />
            <AddPicture title='Licencia de conducir' buttonTitle='Agregar Foto' />
            <AddPicture title='Matricula de Vehiculo' buttonTitle='Agregar Foto' />
            <AddPicture title='Seguro' buttonTitle='Agregar Foto' />
            <ButtonComponent
                    title='Agregar Documentacion'
                    widthButton='100%'
                    background={colors.gold}
                    textColor={colors.white}
                    margin={12}
                   
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