import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { Card, Input } from '@rneui/themed'
import { colors, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { CheckBoxComponent } from '../../components/CheckBox'
import { useNavigation } from '@react-navigation/native'

export const PasotwoScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='align-justify' />
        <BlackTitle title='Paso 2' />
        <ScrollView>
        <View style={styles.container}>
            <CheckBoxComponent 
                title='aire Acondicionado'
                span=''
            />
            <CheckBoxComponent 
                title='Alfombra'
                span=''
            />
            <CheckBoxComponent 
                title='Amplificador'
                span=''
            />
            <CheckBoxComponent 
                title='Antena'
                span=''
            />
            <CheckBoxComponent 
                title='Aros'
                span=''
            />
            <CheckBoxComponent 
                title='Forro Asiento'
                span=''
            />
            <CheckBoxComponent 
                title='Bateria'
                span=''
            />
            <CheckBoxComponent 
                title='Bocina'
                span=''
            />
            <CheckBoxComponent 
                title='Cinturones'
                span=''
            />
            <CheckBoxComponent 
                title='Documentos'
                span=''
            />
            <CheckBoxComponent 
                title='Acualizador'
                span=''
            />
            <CheckBoxComponent 
                title='Encendedor'
                span=''
            />
            <CheckBoxComponent 
                title='Espejos'
                span=''
            />
            <CheckBoxComponent 
                title='Faroles'
                span=''
            />
             <CheckBoxComponent 
                title='Forro de puertas'
                span=''
            />
            <CheckBoxComponent 
                title='Forro de techo'
                span=''
            />
            <CheckBoxComponent 
                title='Sun Roof'
                span=''
            />
            <CheckBoxComponent 
                title='Gato'
                span=''
            />
            <CheckBoxComponent 
                title='Goma de Respuesta'
                span=''
            />
            <CheckBoxComponent 
                title='Limpiabrisas'
                span=''
            />
            <CheckBoxComponent 
                title='Logo'
                span=''
            />
            <CheckBoxComponent 
                title='Llave de rueda'
                span=''
            />
            <CheckBoxComponent 
                title='Llavera'
                span=''
            />
            <CheckBoxComponent 
                title='Micas'
                span=''
            />
            <CheckBoxComponent 
                title='Moldulares'
                span=''
            />
            <CheckBoxComponent 
                title='Placa'
                span=''
            />
            <CheckBoxComponent 
                title='Radio'
                span=''
            />
            <CheckBoxComponent 
                title='Revista'
                span=''
            />
            <CheckBoxComponent 
                title='Spoiler'
                span=''
            />
            <CheckBoxComponent 
                title='Tablero'
                span=''
            />
            <CheckBoxComponent 
                title='Tapa de bocinas'
                span=''
            />
            <CheckBoxComponent 
                title='Tapa de gasoil'
                span=''
            />
            <CheckBoxComponent 
                title='Vidrio'
                span=''
            />
            <CheckBoxComponent 
                title='Extintor'
                span=''
            />
            <CheckBoxComponent 
                title='Alarma'
                span=''
            />
            <CheckBoxComponent 
                title='Flears'
                span=''
            />
            <Image style={styles.car} source={require("../../assets/car.png")}  />
            <Input
                placeholder="Trabajo de carroceria"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <Input
                placeholder="Trabajo mecanicos"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.black} 
                title="Continuar" 
                textColor={colors.white} 
                margin={16} 
                handle={()=>navigator.navigate('PasoThree')}
            />
        </View>
        </ScrollView>
      </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:10
    },
    car:{
        width:400,
        height:450,
    },
    comment:{
        //width: 100,
        height: 250,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    },
})