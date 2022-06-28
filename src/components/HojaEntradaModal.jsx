import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { InputAccordion } from '../atoms/InputAccordion';
import { InputWhite } from '../atoms/InputWhite';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { AddPicture } from './AddPicture';
import { useNavigation } from '@react-navigation/native';

export const HojaEntradaModal = () => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Hoja de entrada</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <InputAccordion title='Marca' type='Honda'/>
            <InputAccordion title='Modelo' type='Civic'/>
            <InputAccordion title='Tipo de Vehiculo' type='Sedan'/>
            <InputAccordion title='Año' type='2016'/>
            <InputAccordion title='#Asientos' type='6'/>
            <InputAccordion title='#Puertas' type='5'/>
            <InputAccordion title='Transmision' type='Automatica'/>
            <InputAccordion title='Transaccion' type='4WD'/>
            <InputAccordion title='Motor' type='2000, 4 cilindros'/>
            <InputAccordion title='Color Interior' type='Negro'/>
            <InputAccordion title='Color Exterior' type='Azul'/>
            <InputWhite 
                title='Accesorios' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Filtros aceite' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Activo/Flotilla' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Nivel Combustible' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Nivel Temperatura' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Placa' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Combustible' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Aceite' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
           <InputAccordion title='Transaccion' />
           <InputAccordion title='Cilindros' />
           <Input
                placeholder="Detalles del servicio"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <ButtonComponent
                    title='Inventario'
                    widthButton='100%'
                    background={colors.gold}
                    textColor={colors.white}
                    margin={12}
                    handle={()=>navigator.navigate('InventarioModal')}
            />
            <AddPicture title='Fotos de Vehiculo' buttonTitle='Agregar fotos' check={false} />
            <AddPicture title='Presenta daños' buttonTitle='Especificar daños'check={false} handle={()=>navigator.navigate('EspecirficarDanosModal')} />
            <AddPicture title='Datos personales' buttonTitle='Agregar Documentacion' check={false} handle={()=>navigator.navigate('AgregarDocumentacionModal')} />
            <AddPicture title='Datos del seguro' buttonTitle='Agregar datos del seguro' check={true} handle={()=> navigator.navigate('DatosSeguroModal')} />
       
            <View style={styles.boxYellow}>
                <Text style={styles.parrafo}>
                    Con su firmeza autoriza ser el responsable de esta pieza
                    y que los datos mostrados arriba corresponden a lo que esta recibiendo.
                </Text>
            </View>
            <Image source={require('../assets/firma.png')} 
                style={{
                    width: '100%',
                    height: 200,
                    marginTop:20
                }}
            />
            <ButtonComponent
                title='Guardar'
                widthButton='100%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
                handle={()=>navigator.navigate('ReparacionPendiente')}
                
            />
            </ScrollView>
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
          justifyContent:'center',
          paddingHorizontal: 6,
          paddingVertical:7
    },
    children:{
        width: '100%',
        height: "auto",
        backgroundColor:'white',
        paddingHorizontal: 12,
        paddingVertical:6
    },
    childrenHeader:{
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
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
    boxYellow:{
        width:'100%',
        height: 120,
        backgroundColor:'#e8a84b',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:12,
        paddingRight:2,
        paddingVertical:4,
        marginTop:21
    },
    parrafo:{
        fontSize:15,
        fontWeight:'500',
        color: 'black'
    },
})