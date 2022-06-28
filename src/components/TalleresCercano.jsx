import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon} from '@rneui/themed';
import { BoxPicture } from './BoxPicture';
import { colors } from '../style/base';
import { useNavigation } from '@react-navigation/native';


export const TalleresCercano = () => {
    const navigator = useNavigation();
  return (
  <>
    <View style={styles.container}>
        <Image 
            source={require('../assets/almanzar.png')}
            style={styles.image}
        />
        <Title h3={true} h3Style={{fontSize:25}}>Taller almanzar</Title>
        <BoxPicture />
        <Text
            style={{
                fontSize:18,
                color: colors.gold
            }}
        >3 min</Text>
        <Icon 
            name='chevron-right'
            onPress={()=>navigator.navigate('RelizarSolicitud')}   
        
        />
       
    </View>
    
    </>
  )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 'auto',
        justifyContent:'space-around',
        alignItems:'center',       
        flexDirection:'row',
        marginTop:12
    },
    image:{
        width: 50,
        height: 50
    },
  
})