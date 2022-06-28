import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { Input, Text as Title } from '@rneui/themed'
import { colors, fonts, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { CheckBoxComponent } from '../../components/CheckBox'
import { useNavigation } from '@react-navigation/native'

export const PasoThreeScreen = () => {
     const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='align-justify' />
        <BlackTitle title='Paso 3' />
        <ScrollView>
        <View style={styles.container}>
            <Title h4={true} h4Style={{
                fontSize:fonts.md
            }}>
                Garantizo y aseguro que soy el dueno Y/O estoy autorizado por el dueno de este 
                vehiculo para efectuar esta reparacion 
            </Title>
            
            <Title style={{
                fontSize:fonts.md
            }}>
                Con la presente autorizo el trabajo de arriba descrito junto con las piezas
                de repuesto y otros materiales necesarios para efectuarlo, autorizio
                a 3Tiz. o sus empleados operar el vehiculo en las calles o en el garaje para probarlo y revisarlo
            </Title>
            <Title style={{
                fontSize:fonts.md,
                marginTop: padding.md
            }}>
                Asi mismo otorgo el derecho  de disponer del vehiculo arriba mencionado en caso de no
                pagar las reparaciones y respuestos utilizados
                para amaparar asi los gastos del mismo.
            </Title>
            <Title style={{
                fontSize:fonts.md,
                marginTop: padding.md
            }}>
                Si transcurro dos dias a partir de la fecha en 
                que se haya notificado al cliente que su
                vehiculo esta listo para la entrega y no fuere
                retirado, el cliente debera pagar por uso de diarios, hasta el momento que el vehiculo
                fuera retirado de la empresa, ademas del costo de reparacion. Asi mismo si despues de
                recibido el vehiculo dicha reparacion no se 
                pudiese realizar por falta de piezas que el cliente nos deba 
                suministrar, pagara la suma de cien pesos (RD$100) por cada dia dejado de trabajar. Asi mismo si el vehiculo no es retirado
                en un plazo de 30 dias, sera vendido de grado a grado o en publica
                subasta y del producto de la ventase cobrara
                el costo de reparacion, la suma que por su uso de garaje este pendiente de pago y los gastos en que se haya incurrido por los procedimentos de la venta.
                la suma que pudiera sobrar despues de deducidos los costos anteriores sera devuelta al cliente
            </Title>
            <Title h4={true} h4Style={{
                fontSize:fonts.md,
                marginTop: padding.md
            }}>
                NO SOMOS RESPONSABLES POR PERDIDAS O DANOS A LOS VEHICULOS O ARTICULOS 
                DEJADOS EN CASO DE INCENDIO, ROBO, ACCIDENTES O CUALQUIER OTRA CAUSA FUERA DE NUESTRO CONTROL.
            </Title>
            <Title style={{
                fontSize:fonts.md,
                
            }}>
               No somos responsables de danos electricos
               del vehiculo y principalmente danos de la bateria no especificado
               al momento de la recepcion del vehiculo
            </Title>
            <CheckBoxComponent 
                title='Aceptar terminos y condiciones'
                span=''
            />
            <Input
                placeholder="Trabajo de carroceria"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <Input
                placeholder="Observaciones"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            
            <InputWhite 
                title='Entrgado por:' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <InputWhite 
                title='Taller' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.black} 
                title="Finalizar y enviar" 
                textColor={colors.white} 
                margin={16} 
                handle={()=>navigator.navigate('ServiciosPendientes')}
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