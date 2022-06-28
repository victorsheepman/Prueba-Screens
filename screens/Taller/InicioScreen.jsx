import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import { colors } from '../../style/base'
import { ItemLink } from '../../components/ItemLink'
import { MenuModal } from '../../components/MenuModal'

export const InicioScreen = () => {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon 
              type='font-awesome' name='align-justify' 
              onPress={()=>setModal(true)}
            />
            <Text style={{
                fontSize: 15,
                letterSpacing: 1,
                lineHeight: 42,
                color: colors.white,
                fontWeight: 'bold',
                //fontFamily: "Arial",
                textAlign: 'center',
                marginLeft:'30%'
            }}>
                Ubicacion actual
            </Text>
        </View>
        <ScrollView>
          <View style={{width:'100%', height:'auto', alignItems:'center'}}>
        <ItemLink text='Dealers'  >
          <View style={styles.boxImage}>
              <Image 
                style={{width:55, height:40, marginLeft:5}}
                source={require('../../assets/icon-dealer.png')}
              />
          </View>
        </ItemLink>
        <ItemLink text='CarWash'>
          <View style={styles.boxImage} >
              <Image 
                style={{width:55, height:40, marginLeft:5}}
                source={require('../../assets/icon-carWash.png')}
              />
          </View>
        </ItemLink>
        <ItemLink text='Respuestos' ruta='BuscarServicioScreen'>
          <View style={styles.boxImage}>
              <Image 
                style={{width:55, height:40, marginLeft:10}}
                source={require('../../assets/icon-repuesto.png')}
              />
            </View>
        </ItemLink>
        <ItemLink text='Taller' ruta='Busqueda'  >
          <View style={styles.boxImage}>
              <Image 
                style={{width:50, height:50, marginLeft:10}}
                source={require('../../assets/icon-taller.png')}
              />
            </View>
        </ItemLink>
        <ItemLink text='Seguros' ruta='PasoOne'  >
          <View style={styles.boxImage}>
              <Image 
                style={{width:50, height:60, marginLeft:10}}
                source={require('../../assets/icon-seguro.png')}
              />
            </View>
        </ItemLink>
        <ItemLink text='Rent a car'>
          <View style={styles.boxImage}>
            <Image 
              style={{width:50, height:60, marginLeft:12}}
              source={require('../../assets/icon-rent.png')}
            />
          </View>
        </ItemLink>
        <ItemLink text='Servicios de grua'>
          <View style={styles.boxImage}>
            <Image 
            style={styles.image}
            source={require('../../assets/icon-grua.png')}
          />
          </View>
          
        </ItemLink>
        
        </View>
        <View style={styles.footer}>
            <Icon 
              type='font-awesome'
              name='question'
              size={50}
              color={colors.gold}
            />
        </View>
        </ScrollView>
        {
          modal && <MenuModal setModal={setModal} />
        }
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bea741',
       // alignItems: 'center',
        //justifyContent: 'center',
        paddingVertical:20
      },
      header:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
      },
      boxImage:{
        width: 70,
        height: 70,
        borderRadius:80,
        backgroundColor:'white',
        justifyContent:'center',
        alignContent:'center',
      },
      image:{
        width: 70,
        height: 40,
        borderRadius:80,
      },
      footer:{
        width: '80%',
        height: 120,
        backgroundColor:'white',
        marginLeft:45,
        marginTop:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        justifyContent:'center',
        alignItems:'center'

      }
})