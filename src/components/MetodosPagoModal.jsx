import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Text as Title} from '@rneui/themed';
import { colors } from '../style/base';
import { Card } from '@rneui/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/core';

export const MetodosPagoModal = ({setShow, ruta}) => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <View style={styles.childrenHeader}>
            <Text style={{fontSize:17, color: colors.blue}} onPress={
                ()=>setShow(false)
            }>cancelar</Text>
            <Title h3={true} h3Style={{marginLeft:'15%', fontSize:20}}>Metodo de pago</Title>
        </View>
        <Image style={{width:385, height:300}} source={require('../assets/Pago.png')} />
        <View style={styles.footer}>
            
            <ButtonComponent 
                widthButton='100%'
                background={colors.gold}
                title='Pagar'
                textColor={colors.white}
                margin={17}
                handle={()=>navigator.navigate(ruta)}
            />
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
          justifyContent:'flex-end',
          paddingHorizontal: 12,
          //paddingVertical:7
    },
    children:{
        width: '100%',
        height: "80%",
        backgroundColor:'white',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,

    },
    childrenHeader:{
        width: "100%",
        height: 'auto',
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'#e4e6eb',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        paddingHorizontal:10, 
        paddingVertical:12
    },
    input:{
        width:'100%',
        height: 'auto',
        paddingVertical: 12,
        paddingHorizontal:12,
        flexDirection:'row'
    },
    visa:{
        width:40,
        height: 30,
        backgroundColor:'blue',
        marginLeft:12
        
    },
    creditCard:{
        width:'100%',
        height: 'auto',
        paddingVertical: 12,
        paddingHorizontal:12,
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    footer:{
        width: '100%',
        height: '60%',
        backgroundColor:'#e4e6eb',
        paddingHorizontal:15,
        paddingVertical:6,
        alignItems:"center"
    }
})