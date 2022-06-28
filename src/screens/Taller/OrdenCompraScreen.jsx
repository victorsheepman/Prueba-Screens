import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed'
import { colors, fonts } from '../../style/base'
export const OrdenCompraScreen = () => {
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Orden de compra' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.box}>
                <Title h3={true} h3Style={
                    {
                        fontSize: fonts.md
                    }
                }>Datos de la orden
                </Title>
                <View style={styles.card}>
                    <FlatList
                        data={[
                            {key: 'Numero: 1111111'},
                            {key: 'Fecha: 01/30/22'},
                            {key: 'RNC: 000000000000'},
                            {key: 'Cotizacion: 22222222'},     
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
            </View>
            <View style={{
                    width: '100%',
                    height: 200,
                    justifyContent:'space-around',
                    paddingVertical:10,
                    paddingHorizontal:10, 
                }}>
                    <Text>Suplidor: Grupo Viamar</Text>
                    <Text>Reclamo: 3331111</Text>
                    <Text>Poliza: 0-0-000-0000000</Text>
                    <Text>Aseguradora: Dominicana S.A</Text>
                    <Text>Vehiculo: Camion Kia k27000, 2018, chasis - kkk1111ppppsss5555</Text>
                    <Text>Placa: 0000000000</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.factura}>
                    <Text>Sub-total:</Text>
                    <Text>117.402.00</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Descuento:</Text>
                    <Text>35,000.00</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Despreacion:</Text>
                    <Text>0.00</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Coaseguro:</Text>
                    <Text>0.00</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Deducible:</Text>
                    <Text>0.00</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Total Neto:</Text>
                    <Text>82.782</Text>
                </View>
                <View style={styles.factura}>
                    <Text>Impuestos:</Text>
                    <Text>82.782</Text>
                </View>
                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:fonts.md}}>Total general:</Title>
                    <Title h3={true} h3Style={{fontSize:fonts.md}}>82.782</Title>
                </View>
            </View>
            <View style={styles.box}>
                <Title h3={true} h3Style={{fontSize:fonts.md}}>
                    Importe a cargo del asegurado
                </Title>
                <View style={styles.box}>
                    <View style={styles.factura}>
                        <Text>Despreacion:</Text>
                        <Text>0.00</Text>
                    </View>
                    <View style={styles.factura}>
                        <Text>Coaseguro:</Text>
                        <Text>0.00</Text>
                    </View>
                    <View style={styles.factura}>
                        <Text>Deducible:</Text>
                        <Text>0.00</Text>
                    </View>
                    <View style={styles.factura}>
                        <Text>Impuestos:</Text>
                        <Text>0.00</Text>
                    </View>
                
                </View>
                <View style={styles.factura}>
                    <Title h3={true} h3Style={{fontSize:fonts.md}}>Total Bruto:</Title>
                    <Title h3={true} h3Style={{fontSize:fonts.md}}>82.782</Title>
                </View>
            </View>
            <View style={styles.factura}>
                <Title h3={true} h3Style={{fontSize:fonts.lg}}>Total General:</Title>
                <Title h3={true} h3Style={{fontSize:fonts.lg}}>RD$ 96,974.50</Title>
            </View>
            <View style={styles.box}>
                <View style={{
                    width:  '100%', 
                    height:150,
                   // backgroundColor:'green',
                    alignItems:'center'
                }}>
                    <Image style={
                        {
                            width: 300,
                            height: 80,
                        }
                    } source={require('../../assets/larry.png')}/>
                    <Card.Divider style={{width:"80%",margin:20}} color={colors.black} width={1}/>
                    <Title h4={true} h4Style={{fontSize:fonts.sm}}>Autorizado por: larry page</Title>
                </View>
                
            </View>
        </View>
        </ScrollView>
    </>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
      },
      box:{
        width: '100%',
        height: 'auto',
        paddingVertical:10,
        paddingHorizontal:10, 
        marginTop:12
      },
      item:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:9
    },
    card:{
        width:"100%",
        height: "auto",
        //backgroundColor:"blue",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:5,
        paddingLeft:12,
        //marginTop:12
    },
    factura:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})