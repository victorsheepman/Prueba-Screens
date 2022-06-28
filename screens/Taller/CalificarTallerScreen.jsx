import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { ListItem, Badge, AirbnbRating } from '@rneui/themed';
import { colors } from '../../style/base';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';

export const CalificarTallerScreen = () => {
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Calificar Servicios' />
        <View style={styles.container}>
            
            
            <ListItem
                containerStyle={{backgroundColor:'#eae8fe', width:'100%', borderRadius:5}}
            >
                <ListItem.Content>
                    <ListItem.Title style={{ color: colors.black, fontWeight: 'bold', fontSize:24 }}>
                        Jose Luis .M
                    </ListItem.Title>
                    <ListItem.Subtitle style={{ color:'#9a9cca' }}>
                        Electricista Automotriz
                    </ListItem.Subtitle>
                </ListItem.Content>
                <Badge value="40" badgeStyle={{backgroundColor:colors.black,width: 40, height:25}} />
            </ListItem>
            <View
                style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                }}
            >
                <AirbnbRating />
            </View>
            <View style={styles.review}>
                <Text style={{fontSize:15}}>Buen Trabajo, Me gusto mucho el servivicio de ustedes, gracias </Text>
            </View>
            <ButtonComponent
                widthButton='100%'
                textColor={colors.white}
                background={colors.black}
                margin={15}
                title='Enviar valoracion'
            
            />
            
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:12
      },
    review:{
          width: '80%',
          height: 120,
          justifyContent:'center',
          alignItems:'center',
          paddingHorizontal:15,
          borderWidth:1,
          borderRadius:6
    },
    person:{
        width: '50%',
        height: '60%',
        backgroundColor:'red'
    }
})