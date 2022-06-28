import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { Pressable } from 'react-native'
import { Text as Title, Icon} from '@rneui/themed';
import { colors, fonts } from '../../style/base'
import { InputAccordion } from '../../atoms/InputAccordion'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import ProductComponent from '../../components/ProductComponent'
import { useNavigation } from '@react-navigation/native'

export const BuscarServicioScreen = () => {
  
  const navigator = useNavigation();

  return (
    <>
        <HeaderComponent iconLeft='align-justify' />
        <BlackTitle title='Busqueda de articulo' />
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <InputWhite inputWidth='80%' inputHeight={50} radius={8} title='Buscar categoria...' />
            <Pressable style={styles.search}>
                <Icon type='font-awesome' name='search'color={colors.white} />
            </Pressable>
          </View>
         <View style={styles.box}>
            <Title h3={true} h3Style={{
              fontSize:fonts.md
            }}>
              Seleccione el tipo de vehiculo
            </Title>
            <InputAccordion title='Seleccione una marca' />
            <InputAccordion title='Seleccione un modelo' />
            <InputAccordion title='tipo de motor' />
            <ButtonComponent
                    title='Buscar'
                    widthButton='100%'
                    background={colors.gold}
                    textColor={colors.white}
                    margin={12}
                />
         </View>
         <View style={styles.box}>
            <Title h3={true} h3Style={{
              fontSize:fonts.md
            }}>
              ¿No encuentras un servicio?
            </Title>
            <View style={{paddingHorizontal:12, flexDirection:'row', marginTop:12}}>
              <Image style={{width:50, height:60}} source={require('../../assets/start.png')} />
              <Title  style={{
              fontSize:18,
            }}>Puedes solicitar el servicio que deseas, en seguida recibiras o</Title>
            </View>
            <ButtonComponent
              title='Pedir Repuesto como deseo'
              widthButton='100%'
              background={colors.black}
              textColor={colors.white}
              margin={12}
              handle={() => navigator.navigate('PedirComoDeseoModal')}

            />
         </View>
         <Image style={{
          width: 400,
          height: 50, 
          marginTop:12,
         }} source={require('../../assets/marcas.png')} />
         <Title h3={true} h3Style={{
              fontSize:fonts.md,
              marginTop:12
            }}>
             (2) resultados encontrados
            </Title>
            <ProductComponent>
              <Image source={require('../../assets/mannol.png')}
                  style={{
                      width: 95,
                      height: 110,
                  }}
              /> 
            </ProductComponent>
            <ProductComponent title='SPECOL spec, Mix 4T Aceite copy'>
              <Image source={require('../../assets/specol.png')}
                  style={{
                      width: 95,
                      height: 180,
                  }}
              /> 
            </ProductComponent>
        </View>
        </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
      },
      form:{
        width: "100%",
        height:"auto",
        marginTop:15,
        flexDirection:"row",
        justifyContent:"space-between",
       
    },
    search:{
        width: 50,
        height: 50,
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#bea741'
    }, 
    box:{
      width: '100%',
            height: 'auto',
            marginTop:20,
            paddingHorizontal:20,
    }
})