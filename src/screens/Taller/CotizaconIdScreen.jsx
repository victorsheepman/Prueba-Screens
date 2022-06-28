import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Icon, Text as Title } from '@rneui/themed'
import { colors, fonts, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { ScrollView } from 'react-native-gesture-handler'
import { CheckBoxComponent } from '../../components/CheckBox'
import { MetodosPagoModal } from '../../components/MetodosPagoModal'
import { useNavigation } from '@react-navigation/core'

export const CotizaconIdScreen = () => {
    const [show, setShow] = useState(false)
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle  title='Cotizacion 0006' />
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../../assets/carro.png')}
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                            {key: 'Marca: Honda'},
                            {key: 'Modelo: Civic'},
                            {key: 'Año: 2016'},
                            {key: 'Color: Negro'},
                            {key: 'Tipo de vehiculo: Sedan'},
                            {key: 'Combustible: Gasolina'},
                            {key: 'Transmicion: Automatica'},
                            {key: '# Asintos: 5'},
                            {key: 'Dueño: victor Marquez'},    
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
                <Card.Divider />
                <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='right'
                        color={colors.gold}
                    /> 
                </View>
           
            </View>
        </View>
        <BlackTitle  title='Servicio' />
        <View style={styles.container} >
          <View style={styles.box}>
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md,
                        color:colors.grey
                    }
                }>
                    Instalacion del farol delanter
                </Title>
            <Title
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md, 
                        color:colors.black, 
                        marginTop:padding.sm
                    }
                }>RD$ 700.00
                </Title>
          </View>
          <View style={styles.box}>
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md, 
                        color:colors.grey
                    }
                }>
                    Desabolladura frontal
                </Title>
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md, 
                        color:colors.black, 
                        marginTop:padding.sm
                    }
                    }>RD$ 800.00</Title>
          </View>
          <View style={styles.box}>
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md, 
                        color:colors.grey
                    }
                }>Pintura</Title>
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:fonts.md, 
                        color:colors.black, 
                        marginTop:padding.sm
                    }
                }>RD$ 1,100.00</Title>
          </View>
          <Title h3={true} h3Style={{fontSize:18, marginTop:41}}>Metodo de pago</Title>
            <View style={styles.input}>
                <Pressable style={{
                    width: '48%',
                    height:45,
                    borderColor:colors.gold,
                    borderWidth:2,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5, 
                    marginTop:12
                }}>
                    <Text style={{
                        fontSize:20,
                        color: colors.gold
                    }}>Pago directo</Text>
                </Pressable>
                <ButtonComponent 
                    widthButton={"48%"} 
                    title="Pago a credito" 
                    background={colors.gold} 
                    textColor={colors.white} 
                    margin={12}
                />
            </View>
            <CheckBoxComponent 
                title='Pago Quincenal' 
                span='(4 cuotas de RD$ 767.00)'
            />
            <CheckBoxComponent 
                title='Pago Mensual' 
                span='(2 cuotas de RD$ 1,454.00)'
            />        
            <View 
                style={{
                    width: '100%',
                    height:'auto'
                }}>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:21, 
                            marginTop:12
                        }
                    }
                >
                    Detalles de Facturacion
                </Title>
                
                <Text style={styles.listItem}>SubTotal: RD$ 1,378.00</Text>
                <Text style={styles.listItem}>Itbis: RD$ 378</Text>
            </View>
          <View style={styles.input}>
            <Title h3={true} h3Style={{fontSize:17, marginTop:12}}>RD$1,680.00</Title>
            <ButtonComponent 
                widthButton={"58%"} 
                title="Pagar servicio" 
                background={colors.black} 
                textColor={colors.white} 
                margin={12}
               
            />
        </View>
        </View>
        </ScrollView>
        {
            show && <MetodosPagoModal setShow={setShow} ruta='ReparacionPendiente' />
        }
       
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:20
    },
    card:{
        width:"100%",
        height: "auto",
        //backgroundColor:"blue",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:15,
        paddingLeft:12,
        position: 'relative',
        marginTop:12,
    },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:9
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
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
    box: {
        with:'100%',
        height: 'auto',
        paddingLeft:16,
        marginTop:12
    },
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:12,
        paddingHorizontal:12,
    },
    listItem:{
        fontSize:13,
        fontWeight:"500",
        marginTop:7,
        marginLeft:12
    },
})