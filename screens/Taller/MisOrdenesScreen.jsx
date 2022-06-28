import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header';
import { BlackTitle } from '../../components/BlackTitle';
import { InputWhite } from '../../atoms/InputWhite';
import { Factura } from '../../components/Factura';
import { Servicio } from '../../components/Servicio';
import { Cobro } from '../../components/Cobro';
import { useNavigation } from '@react-navigation/native';

export const MisOrdenesScreen = () => {
  const navigator = useNavigation();
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Mis Ordenes' />
        <View style={styles.container}>
          <View style={styles.input}>
            <InputWhite inputWidth='48%' title='Desde' radius={10} />
            <InputWhite inputWidth='48%' title='Hasta' radius={10}/>
          </View>
          <Cobro date={true} nro={5} handle={()=>navigator.navigate('ordenCompra')} />
          <Cobro date={true} nro={10} mes='Febrero' />
          <Cobro date={true} nro={15} mes='Marzo' />
        </View>    
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
     // alignItems: 'center',
      //sjustifyContent: 'center',
      paddingVertical:20,
      paddingHorizontal:20
    },
    children:{
      width: '100%',
      height: "auto",
      backgroundColor:'white',
      paddingHorizontal: 12,
      paddingVertical:6
  },
  input:{
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop:12,
},
  });
  
  