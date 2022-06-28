import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../style/base'
import { Icon, Card, Text as Title } from '@rneui/themed'
export const MasOpcionesModal = () => {
  return (
    <>
        <View style={styles.container}>
           <View style={styles.children}>
                <View style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection:'row',
                    alignItems:'baseline'
                }}>
                    <Icon
                        type='font-awesome'
                        name='print'
                        color={colors.gold}
                    />
                    <Title h3={true} h3Style={{fontSize:20, marginLeft:12}}>Imprimir factura</Title>
                </View>
                <View style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection:'row',
                    alignItems:'baseline'
                }}>
                    <Icon
                        type='antdesign'
                        name='download'
                        color={colors.gold}
                    />
                    <Title h3={true} h3Style={{fontSize:20, marginLeft:12}}>Descargar factura</Title>
                </View>
                <View style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection:'row',
                    alignItems:'baseline'
                }}>
                    <Icon
                        type='font-awesome'
                        name='whatsapp'
                        color={colors.gold}
                    />
                    <Title h3={true} h3Style={{fontSize:20, marginLeft:12}}>Compartir Via Whatsapp</Title>
                </View>
           </View>
        </View>
    </>
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
          //alignItems:'center',
          //justifyContent:'center',
          paddingHorizontal: 6,
          paddingVertical:7
    },
    children:{
        width: '67%',
        height: 150,
        backgroundColor:'white',
        paddingHorizontal: 12,
        paddingVertical:6,
        position:'absolute',
        right: 15,
        top: 17
    },
})