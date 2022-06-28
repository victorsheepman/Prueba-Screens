import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header';
import { BlackTitle } from '../../components/BlackTitle';
import { InputWhite } from '../../atoms/InputWhite';
import { InputAccordion } from '../../atoms/InputAccordion';
import { Cobro } from '../../components/Cobro';
import { ScrollView } from 'react-native';
import { Card, Icon, Text as Title } from '@rneui/themed';
import { colors, fonts } from '../../style/base';
import { useNavigation } from '@react-navigation/native';
export const CuentasCobrarTwo = () => {
  const navigator = useNavigation();
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Cuentas por Cobrar' />
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.input}>
          <InputWhite inputWidth='48%' title='Desde' radius={10} />
          <InputWhite inputWidth='48%' title='Hasta' radius={10}/>
        </View>
          <InputAccordion title='Filtrar por Marca'/>
          <Cobro date={true} nro={5} handle={()=>navigator.navigate('CuentasPorCobrarScreen')} />
          <Cobro date={true} nro={10} mes='Febrero' />
          <Cobro date={true} nro={15} mes='Marzo' />
          <View style={{
            width:'100%',
            height: 100,
            marginTop:50,
            alignItems:'center',
            justifyContent:'center',
            
            position: 'relative'
          }}>
            <Title
              h3={true}
              h3Style={{
                marginLeft:50
              }} 

            >RD$ 118,368.00 </Title>
            <Text
              style={
                {
                  fontSize:fonts.md,
                  marginLeft:50
                }
              }
            >Pendientes Por cobrar</Text>
              <View style={styles.iconContainer}>
                    <Image
                        source={require('../../assets/dolar.png')}
                        color={colors.grey}
                        style={{
                          width: 90,
                          height: 50
                        }}
                    /> 
                </View>
          </View>
      </View>
      </ScrollView>
    </>
   
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:20,
      paddingVertical:20
    },
    input:{
      width: "100%",
      height: "auto",
      flexDirection: "row",
      justifyContent:"space-between",
      marginTop:12,
  },
  iconContainer:{
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    top: 25,
    left:15,
},
  });
  
  