import { StyleSheet,View, Button, Pressable, ScrollView, Image} from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { Text as Title, Icon} from '@rneui/themed';
import { BlackTitle } from '../../components/BlackTitle';
import { InputWhite } from '../../atoms/InputWhite';
import { colors } from '../../style/base';
import { Servicio } from '../../components/Servicio';
import { useNavigation } from '@react-navigation/native';

export const CategoriaServicioScreen = () => {
  return (
    <>
    <HeaderComponent iconLeft='chevron-left' iconRight='shopping-cart'/>
    <BlackTitle title='Categoria de servicio' />
    <View style={styles.container} >
        
        <View style={styles.form}>
            <InputWhite inputWidth='80%' inputHeight={50} radius={8} title='Buscar categoria...' />
            <Pressable style={styles.search}>
                <Icon type='font-awesome' name='search'color={colors.white} />
            </Pressable>
        </View>
        <ScrollView>
        <Servicio>
            <Image style={styles.serviceImage} source={require('../../assets/ca-mofles.png')} />
        </Servicio>
        <Servicio name='Reparacion de llantas'>
            <Image style={styles.serviceImage} source={require('../../assets/ca-llanta.png')} />
        </Servicio>
        <Servicio name='Servivios electricos' >
            <Image style={styles.serviceImage} source={require('../../assets/ca-electrico.png')} />
        </Servicio>
        <Servicio name='Desabolladura y pintura'>
        <Image style={styles.serviceImage} source={require('../../assets/ca-pintura.png')} />
        </Servicio>
        <Servicio name='Servicios de vestidura' >
        <Image style={styles.serviceImage} source={require('../../assets/ca-vestidura.png')} />
        </Servicio>
        </ScrollView>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:15
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
    serviceImage:{
        width: 100,
        height: 100,
        
    }
})