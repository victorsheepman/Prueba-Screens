import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonComponent } from '../atoms/buttons/ButtonComponent'
import { dimensions } from '../style/base'
export const ModalRequest = ({handle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Text style={styles.title}>"3tiz" quiere enviarte un notificaciones</Text>
        <Text style={styles.parrafo}>
          las notificaciones pueden incluir alertas, sonidos y glovos, los cuales se pueden definir en configuracion
        </Text>
        <View style={styles.buttoms}>
          <ButtonComponent widthButton={dimensions.small} title='No permitir' textColor="blue" background="white" handle={handle} />
          <ButtonComponent widthButton={dimensions.small} title='Permitir' textColor="blue" background="white"  />
        </View>
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
        paddingHorizontal: 40,
    },
    children:{
        width: '100%',
        height: 250,
        borderRadius: 15,
        backgroundColor:'white'

    },
    title: {
      width:"100%",
      height: 'auto',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderTopLeftRadius:15,
      paddingTop: 12,
      borderTopRightRadius:15,
      textAlign:'center',
      fontSize:25,
    },
    parrafo:{
      width:"100%",
      height: "auto" ,
      marginTop:15,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:"center",
      fontSize:20,
    },
    buttoms:{
      width:"100%",
      height: "auto",
      //backgroundColor:"red",
      marginTop:35,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      display: "flex",
      flexDirection:"row",
      justifyContent:"space-around",
      borderTopWidth: 1,
      borderColor:"gray"

    }
  
});
  
  
  
