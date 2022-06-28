import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text as Title } from '@rneui/themed'
import { BoxPicture } from './BoxPicture'
import { colors } from '../style/base'
export const Plato = () => {
  return (
    <View style={styles.container}>
       <Image 
            source={require('../assets/almanzar.png')}
            style={styles.image}
        />
       <View style={{width:'auto', height:'auto'}}>
            <Title h3={true} h3Style={{fontSize:20, color:colors.grey, marginLeft:20}}>Papitas</Title>
            <Text style={{fontSize:15, marginLeft:20}}>RD$ 180.00</Text>
       </View>
        <Icon 
            type='antdesign' 
            name='closecircleo'   
            style={{marginLeft:'50%'}}
        />
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 'auto',
        alignItems:'center',       
        flexDirection:'row',
        marginTop:12
    },
    image:{
        width: 50,
        height: 50
    },
})