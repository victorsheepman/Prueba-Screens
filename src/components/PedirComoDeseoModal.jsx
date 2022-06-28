import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { InputAccordion } from '../atoms/InputAccordion';
import { AddPicture } from './AddPicture';
import { useNavigation } from '@react-navigation/native';
export const PedirComoDeseoModal = () => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Pedir como deseo</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                />
            </View>
            <InputAccordion title='Seleccionar una marca' />
            <InputAccordion title='Seleccionar un modelo' />
            <InputAccordion title='Tipo de motor' />
            <InputAccordion title='Año' />
            <InputAccordion title='Cantidad deseada' />
            <Input
                placeholder="Detalles del servicio"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <AddPicture 
                title='¿instalacion de pieza?' 
                buttonTitle='Enviar deseo' 
                handle={()=>navigator.navigate('DeseosScreen')} 
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