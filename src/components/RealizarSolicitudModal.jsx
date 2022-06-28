import { StyleSheet, View, Image, ScrollView,Button } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { InputAccordion } from '../atoms/InputAccordion';
import { InputWhite } from '../atoms/InputWhite';
import { AddPicture } from './AddPicture';

import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/core';

export const RealizarSolicitudModal = ({setShow}) => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
    
      <View style={styles.children}>
          <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Realizar solicitud</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <InputAccordion title='Seleccionar una marca' />
            <InputAccordion title='Seleccionar un modulo' />
            <InputAccordion title='tipo de motor' />
            <InputWhite 
                title='año' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputAccordion title='tipo de servicio' />
            <AddPicture title='¿instalacion de pieza?' buttonTitle='Selecionar Pieza' />
            <Input
                placeholder="Detalles del servicio"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Title h4={true} h4Style={{fontSize:16}}>Anexar foto</Title>
                    <Button
                        
                        title="Seleccionar Archivo"
                        color={colors.black}
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <ButtonComponent
                    title='Enviar solicitud'
                    widthButton='100%'
                    background={colors.black}
                    textColor={colors.white}
                    margin={12}
                    handle={
                        () => navigator.navigate('SolicitudSeguro')
                    }
                />

            </View>
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
          zIndex: 1,
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
    comment:{
        //width: 100,
        height: 250,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    },
    wrapper:{
        width: "100%",
        height: 120,
        paddingHorizontal:10,
        paddingVertical:7,
        borderWidth:1, 
        marginTop:12
    }, 
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-between"
    },
})